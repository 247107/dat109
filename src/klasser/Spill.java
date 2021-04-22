package klasser;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(schema = "Yatzy", name = "spill")
public class Spill {

    @Id
    private int spillID;
    String navn;

    @OneToMany(mappedBy = "spill", cascade = CascadeType.PERSIST)
    private List<Spiller> spillere;

    public Spill(int id, String navn) {
        this.spillID = id;
        this.navn = navn;
    }

    public List<Spiller> getSpillere() {
        return spillere;
    }

    public void leggTilSpiller(Spiller spiller) {
        spillere.add(spiller);
    }

    public void oppdaterSpiller(int index, Spiller spiller) {
        spillere.set(index, spiller);
    }


}