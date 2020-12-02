import React,{ useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Button,
  Grid
} from "@material-ui/core";

import CustomInput from "./CustomInput";
import { useState } from "react";
import { PostContext } from "../../Session";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "absolute",
    backgroundColor: "#d4d4d4a4",
    marginTop: "25em",
    padding: "2em 0"
  },
 
  btn: {
    backgroundColor: "#1C5EAC",
    fontSize: "12px",
    color: "#ffffff",
    width: "100%",
    height: "48px",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "#1C5EAC",
    },
    opacity: 1,
  },
  formFeild: {
    border: "none",
    width: "100%",
    height: "48px",
    outline: "none",
    backgroundColor: "#ffffff",
    padding: "0 .5em",
    [theme.breakpoints.down("sm")]:{
      margin: "1em 0"
    }
   
  },
 
}));

const jobs = [
  "Décorateur d'intérieur",
  "Dentiste",
  "Designer industriel",
  "Développeur informatique",
  "Diacre",
  "Diététicien",
  "Directeur artistique",
  "Directeur des ventes",
  "Directeur financier",
  "Directeur RH",
  "Economiste",
  "Educateur de jeunes",
  "Eleveur",
  "Employé de banque",
  "Enseignant",
  "Ergothérapeute",
  "Esthéticienne",
  "Fleuriste",
  "Gardien",
  "Géomètre",
  "Gestionnaire immobilier",
  "Hôtesse de l'air",
  "Huissier",
  "Illustrateur",
  "Infirmière",
  "Ingénieur civil",
  "Ingénieur électronicien",
  "Ingénieur du BTP",
  "Inspecteur de l'action sanitaire et sociale",
  "Jardinier",
  "Jardinier paysagiste",
  "Journaliste",
  "Juge",
  "Kinésithérapeute",
  "Linguiste",
  "Machiniste",
  "Magasinier",
  "Maître d'hôtel",
  "Manipulateur radio",
  "Masseur",
  "Mécanicien aéronautique",
  "Médecin",
  "Moniteur d'auto-école",
  "Monteur électricien",
  "Soldat",
  "Soudeur",
  "Statisticien",
  "Surveillant pénitentiaire",
  "Technicien alarme intrusion",
  "Technicien d'analyses biomédicales",
  "Technicien de maintenance informatique",
  "Technicien d'exploitation",
  "Téléconseiller",
  "Test manager",
  "Travailleur social",
  "Urbaniste",
  "Vendeur",
  "Vétérinaire",
  "Webmaster",
  "Acheteur",
  "Administrateur de base de données",
  "Agent de sûreté aéroportuaire",
  "Agent de transit",
  "Agent d'entretien",
  "Agent funéraire",
  "Agent immobilier",
  "Agent de police",
  "Agent de presse",
  "Agent de sécurité",
  "Agent de surveillance de la voie publique (ASVP)",
  "Agronome",
  "Ambulancier",
  "Analyste financier",
  "Analyste programmeur",
  "Analyste Web",
  "Architecte",
  "Architecte paysagiste",
  "Architecte en système d'information",
  "Archiviste",
  "Assitant administratif et financier",
  "Assistant blibliothécaire",
  "Assistant d'éducation",
  "Assistant dentaire",
  "Assistant marketing",
  "Assistant paie et administration",
  "Assistant RH",
  "Assureur",
  "Audioprothésiste",
  "Auditeur financier",
  "Auxiliaire de puériculture",
  "Auxiliaire de vie sociale",
  "Avocat",
  "Bibliothécaire",
  "Biologiste",
  "Chargé de communication",
  "Chargé de recrutement",
  "Charpentier",
  "Chauffeur de taxi",
  "Chefs de chantier",
  "Chef de projet",
  "Chef de projet marketing",
  "Chef d'établissement",
  "Chiropracteur",
  "Chirurgien orthopédiste",
  "Coiffeur",
  "Commis de cuisine",
  "Comptable",
  "Concepteur de jeux vidéos",
  "Concepteur-rédacteur",
  "Conducteur de grue",
  "Conducteur de train",
  "Conseiller",
  "Conseiller d'orientation",
  "Conseiller en insertion professionnelle",
  "Consultant bien-être",
  "Consultant en informatique",
  "Contrôleur (trains)",
  "Contrôleur aérien",
  "Contrôleur de gestion",
  "Contrôleur financier",
  "Courtier en assurance",
  "Cuisinier",
  "Nutritionniste",
  "Officier",
  "Opérateur de production",
  "Opérateur d'usinage sur commande numérique (UCN)",
  "Opticien",
  "Orthophoniste",
  "Personal Trainer",
  "Pharmacien",
  "Photographe",
  "Physicien",
  "Physicien médical",
  "Pilote",
  "Politicien",
  "Pompier",
  "Poseur de sol (solier)",
  "Prêtre",
  "Procureur",
  "Professeur des écoles",
  "Professeur d'éducation physique (EPS)",
  "Professeur de français langue étrangère",
  "Porfesseur des universités",
  "Psychologue",
  "Réceptionniste",
  "Réceptionniste d'hôtel",
  "Responsable communication",
  "Responsable grands comptes",
  "Responsable service clientèle",
  "Sages-femmes",
  "Secrétaire médicale",
  "Serveur",
  "Skipper",
  "Soldat",
  "Soudeur",
  "Statisticien",
  "Surveillant pénitentiaire",
  "Technicien alarme intrusion",
  "Technicien d'analyses biomédicales",
  "Technicien de maintenance informatique",
  "Technicien d'exploitation",
  "Téléconseiller",
  "Test manager",
  "Travailleur social",
  "Urbaniste",
  "Vendeur",
  "Vétérinaire",
  "Webmaster",
];

const cities = [
  "Aéré Lao",
  "Bakel",
  "Bambey",
  "Bargny",
  "Bignona",
  "Birkelane",
  "Bodé Lao",
  "Bounkiling",
  "Colobane/Signy",
  "Dabo",
  "Dagana",
  "Dahra",
  "Dakar",
  "Démette",
  "Diakhao",
  "Diamniadio",
  "Diannah Malary",
  "Diaobé-Kabendou",
  "Diattacounda",
  "Diawara",
  "Diofior",
  "Diouloulou",
  "Dombondir",
  "Doudé bagué",
  "Foundiougne",
  "Gaé",
  "Galladé",
  "Galoya Toucouleur",
  "Gandiaye",
  "Golléré",
  "Gorée",
  "Gossas",
  "Goudiry",
  "Goudomp",
  "Guédé Chantier",
  "Guéoul",
  "Guinguinéo",
  "Hamady Ounaré",
  "Joal-Fadiouth",
  "Kahone",
  "Kanel",
  "Kaolack",
  "Kaour",
  "Karang Poste",
  "Kayar",
  "Kébémer",
  "Kédougou",
  "Keur Madiabel",
  "Khombole",
  "Kidira",
  "Kolda",
  "Kothiary",
  "Koumpentoum",
  "Koungheul",
  "Kounkané",
  "Linguère",
  "Madina Wandifa",
  "Malem Niani",
  "Malem-Hodar",
  "Marsassoum",
  "Matam",
  "Mbacké ",
  "Mboro",
  "Mboumba",
  "M'bour",
  "Meckhe",
  "Médina Yoro Foulah",
  "Mpal",
  "Ndande",
  "Ndiandane",
  "Ndioum",
  "Ndofane",
  "Ndombo Sandjiry",
  "Nganda",
  "Ngaparou",
  "Nguékhokh",
  "Nguidjilone",
  "Nioro du Rip",
  "Ourossogui",
  "Oussouye",
  "Passy",
  "Pata",
  "Pété",
  "Podor",
  "Pout",
  "Ranérou",
  "Richard-Toll",
  "Ross Béthio",
  "Rosso",
  "Saint-Louis",
  "Salemata",
  "Saly Joseph",
  "Saly Portudal",
  "Samine",
  "Sangalkam",
  "Saraya",
  "Saré Yoba Diéga",
  "Sébikotane",
  "Sédhiou",
  "Semmé",
  "Sinthiou Bamambé-Banadji",
  "Sokone",
  "Somone",
  "Soum",
  "Tambacounda",
  "Tanaff",
  "Thiadiaye",
  "Thiaroye",
  "Thiès",
  "Thilogne",
  "Thionck Essyl",
  "Touba",
  "Vélingara",
  "Walaldé",
  "Waoundé",
  "Yeumbeul",
];

const Search = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const [job, setJob] = useState("");
  const [city, setCity] = useState("");

  const {posts, action} = useContext(PostContext);

  const onSearch = () => {
   let postes = action(job, city);
   props.action(postes);

    if (job != "" && city != "") {
      history.push({
        pathname: "/result",
        state: { job: job, city: city, posts: postes },
        
      });
    } else {
    }
  };

  return (
    <div className={classes.root}>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
            <div className="row">
         <div className="col-sm-6">
         <CustomInput
              elt={jobs}
              type={1}
              value={props.job}
              setValue={setJob}
              input={classes.formFeild}
            />
         </div>
         <div className="col-sm-6">
         <CustomInput
              elt={cities}
              type={2}
              value={props.city}
              setValue={setCity}
              input={classes.formFeild} 
            />
         </div>

       </div>
            </div>
            <div className="col-sm-4">
            <Button color="primary" className={classes.btn} onClick={onSearch}>Rechercher</Button>
            </div>


          </div>
      
     </div>
    </div>
    
   
  );
};

export default Search;
