package servlets;

import java.io.IOException;
import java.util.List;

import javax.ejb.EJB;
import javax.mail.Session;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.SpillDAO;
import klasser.Poeng;
import klasser.Spill;
import klasser.Spiller;

/**
 * Servlet implementation class spilleServlet
 */

@WebServlet("/yatzyServlet")
public class spilleServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @EJB
    private SpillDAO dao;

    /*
        final int spillID = 1;
        int rundeID = 0;
        List<Spiller> spillere;
    */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession session = request.getSession();

        int spillID = 1;
        List<Spiller> spillere;
        spillere = dao.hentAlleSpillere(spillID);
        session.setAttribute("spillere", spillere);

        int x = 0;
        int poengpos = 0;
        int rundeID = 0;
        boolean funnet = false;
        while (!funnet) {
            if (spillere.size() <= x) {
                x = 0;
                poengpos++;
            }

            Spiller spiller = spillere.get(x);
            List<Integer> poengliste = spiller.poeng.poengListe();

            if (poengliste.size() <= poengpos) {
                System.err.println("spill ferdig?");
                break;
            }

            if (spillere.get(0).getSpillerID() == spiller.getSpillerID())
                rundeID++;

            if (poengliste.get(poengpos) == -1) {
                session.setAttribute("spillerID", spiller.getSpillerID());
                session.setAttribute("rundeID", rundeID);
                funnet = true;
            } else
                x++;
        }

        /*
        // codereview?
        System.out.println("doGet");
        int count = 0;

        spillere = dao.hentAlleSpillere(spillID);
        HttpSession session = request.getSession();
        session.setAttribute("spillere", spillere);

        for (Spiller spiller: spillere) {
            List<Integer> poenglist = spiller.poeng.poengListe();

            if (17 <= count) {
                System.err.println("spille ferdig?");
                break;
            }

            if (poenglist.get(count) == 0) {
                session.setAttribute("spillerID", spiller.getSpillerID());
                session.setAttribute("rundeID", rundeID);
                count++;
            }
        }

        System.out.println("runde ID: " + session.getAttribute("rundeID"));
        System.out.println("spiller ID: " + session.getAttribute("spillerID"));
        request.getRequestDispatcher("WEB-INF/index.jsp").forward(request, response);
        rundeID++;*/
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doPost");
        HttpSession session = request.getSession();

        // ------- SETUP -------
        Spiller spiller = dao.hentBestemtSpiller((int) session.getAttribute("spillerID"));
        spiller.oppdaterScore(request, response);
        System.out.println("Update: " + spiller.poeng.poengListe());
        dao.oppdaterNyPoengListe(spiller.poeng);

        // ------- DONE -------
        response.sendRedirect("yatzyServlet");
    }

    private void lagNyttSpill(HttpServletRequest request, HttpServletResponse response) {
        //TODO: :)
        Spill spill = new Spill(1, "Spill");
        Spiller s1 = new Spiller(1, "arun", spill, new Poeng(1));
        Spiller s2 = new Spiller(2, "aru", spill, new Poeng(2));
        Spiller s3 = new Spiller(3, "stian", spill, new Poeng(3));
        
        dao.lagreNyttSpill(spill);
        dao.lagreNyPoengListe(s1.poeng);
        dao.lagreNyPoengListe(s2.poeng);
        dao.lagreNyPoengListe(s3.poeng);

        dao.lagreNySpiller(s1);
        dao.lagreNySpiller(s2);
        dao.lagreNySpiller(s3);
    }
}
