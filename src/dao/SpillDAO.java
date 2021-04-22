package dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import klasser.Poeng;
import klasser.Spill;
import klasser.Spiller;

@Stateless
public class SpillDAO {

    @PersistenceContext(name = "YatzyPU")
    private EntityManager em;

    public List<Spill> hentAlleSpill() {
        return em.createQuery("SELECT s FROM Spill AS s", Spill.class).getResultList();
    }

    public List<Spiller> hentAlleSpillere(int spillID) {
        return em.find(Spill.class, spillID).getSpillere();
    }

    public Spiller hentBestemtSpiller(Object object) {
        return em.find(Spiller.class, object);
    }

    public void lagreNySpiller(Spiller spiller) {
        em.persist(spiller);
    }

    public void lagreNyttSpill(Spill spill) {
        em.persist(spill);
    }

    public void oppdaterSpiller(Spiller spiller) {
        em.merge(spiller);
    }

    public void slettSpill(Spill spill) {
        em.remove(spill);
    }

    public void lagreNyPoengListe(Poeng poeng) {
        em.persist(poeng);
    }

    public void oppdaterNyPoengListe(Poeng poeng) {
        em.merge(poeng);
    }

    public void oppdaterSpill(Spill spill) {
        List<Spiller> alleSpillere = spill.getSpillere();
        for (Spiller s : alleSpillere) {
            em.merge(s.poeng);
        }
        em.merge(spill);
    }
}
		