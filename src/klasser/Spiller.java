package klasser;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Entity
@Table(schema = "YatzyDB", name = "spiller")
public class Spiller {

    Integer turn = 1;

    @Id
    private int spillerID;
    String navn;

    @ManyToOne
    @JoinColumn(name = "spillID", referencedColumnName = "spillID")
    private Spill spill;

    @OneToOne
    @JoinColumn(name = "poengID", referencedColumnName = "poengID")
    public Poeng poeng;

    public Spiller(int id, String navn, Spill spill, Poeng poeng) {
        spillerID = id;
        this.navn = navn;
        this.spill = spill;
        this.poeng = poeng;
    }

    public int getSpillerID() {
        return spillerID;
    }
	
	public Spill getSpill() {
		return spill;
	}

    public void setSpill(Spill spill) {
        this.spill = spill;
    }

    public void oppdaterScore(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("turn value :" + " " + turn);

        if (request.getParameter("dice-value") != null) {
            int value = Integer.parseInt(request.getParameter("dice-value"));

            switch (turn){
                case 1: poeng.enere = value;
                case 2: poeng.toere = value;
                case 3: poeng.trere = value;
                case 4: poeng.firere = value;
                case 5: poeng.femmere = value;
                case 6:
                    poeng.seksere = value;
                    poeng.setSum();
                case 7: poeng.bonus = value;
                case 8: poeng.etPar = value;
                case 9: poeng.toPar = value;
                case 10: poeng.treLike = value;
                case 11: poeng.fireLike = value;
                case 12: poeng.hus = value;
                case 13: poeng.litenStraight = value;
                case 14: poeng.storStraight = value;
                case 15: poeng.sjanse = value;
                case 16: poeng.yatzy = value;
            }
        }

        turn++;
        poeng.setTotal();
    }

    @Override
    public String toString() {
        return "spillerID=" + spillerID + ", navn=" + navn + ", spill=" + spill + ", poeng=" + poeng.toString();
    }
}
