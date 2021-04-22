package klasser;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(schema = "Yatzy", name = "poeng")
public class Poeng {

    @OneToOne(mappedBy = "poeng", cascade = CascadeType.PERSIST)
    private Spiller spiller;

    @Id
    private int poengID;

    int enere, toere, trere, firere, femmere, seksere, summ, bonus, etPar, toPar, treLike, fireLike = 0;
    int hus, litenStraight, storStraight, sjanse, yatzy, total = 0;

    public Poeng(int poengId) {
        poengID = poengId;
    }

    public void setSpiller(Spiller spiller) {
        this.spiller = spiller;
    }
    public Spiller getSpiller() {
        return spiller;
    }


    public void setPoengID(int poengID) {
        this.poengID = poengID;
    }

    public int getPoengID() {
        return poengID;
    }


    public void setSum() {
        summ = enere + toere + trere + firere + femmere + seksere;
    }

    public void setTotal() {
        List<Integer> poengListe = poengListe();
        //remove total from list, before setting total
        poengListe.remove(poengListe.size()-1);

        int count = 0;
        for (Integer poeng : poengListe) {
            count += poeng;
        }
        total = count;
    }


    public List<Integer> poengListe() {
        List<Integer> liste = new ArrayList<>();
        liste.add(enere);
        liste.add(toere);
        liste.add(trere);
        liste.add(firere);
        liste.add(femmere);
        liste.add(seksere);
        liste.add(bonus);
        liste.add(etPar);
        liste.add(toPar);
        liste.add(treLike);
        liste.add(fireLike);
        liste.add(hus);
        liste.add(litenStraight);
        liste.add(storStraight);
        liste.add(sjanse);
        liste.add(yatzy);
        liste.add(total);
        return liste;
    }

    @Override
    public String toString() {
        return "poengID" + poengID + ", spiller=" + spiller + ", enere=" + enere + ", toere=" + toere
                + ", trere=" + trere + ", firere=" + firere + ", femmere=" + femmere + ", seksere=" + seksere + ", sum="
                + summ + ", bonus=" + bonus + ", etPar=" + etPar + ", toPar=" + toPar + ", treLike=" + treLike
                + ", fireLike=" + fireLike + ", litenStraight=" + litenStraight + ", storStraight=" + storStraight
                + ", hus=" + hus + ", sjanse=" + sjanse + ", yatzy=" + yatzy + ", total=" + total;
    }
}