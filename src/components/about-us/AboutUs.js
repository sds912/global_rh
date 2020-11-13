import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Header from "../header/Header";
import CardInfo from "./cardInfo";
import MainButton from "../buttons/MainButton";

const sector1 = {
  title: "Nos secteurs d'intervention",
  items: [
    "Médicale, Pharmaceutique",
    "Batiment, Travaux Publics",
    "Hotellerie et Restauration",
    "Banque et Assurances",
    "Energie et Technologie",
    "Télécommunication",
    "Transport et Logistique",
    "Grande distribution",
    "Manutention",
    "Industrie",
  ],
};

const sector2 = {
  title: "Nos prestations(services)",
  items: [
    "LA GESTION DES RESSOURCES HUMAINES:",
    "Mise à dispositions de personnels compétents",
    "Gestion Administrative des missions et de l'agence",
    "Gestion et contrôle de la paie",
    "Gestion des risques liés aux personnels",
    "Assurer le Suivi commercial et Technique du personnel RH",
    "Oeuvre pour la politique de pévention des risques professionnels Gérer l'acceuil des Salariés intérimaires",
    "Appliques la législation du travail temporaire",

    "LE RECRUTEMENT DU PERSONNEL POUR TOUT SECTEUR:",
    "Recruter des cadres de tout niveau selon vos besoins",
    "Recruter des personnels de toutes qualifications pour votre entreprise",
  ],
};

const sector3 = {
  title: "Solution de gestion pour DRH/DAF",
  items: [
    "Les bénéfices de l'externalisation de la gestion",
    "RH : Souplesses",
    "Réactivité",
    "Tranquilité",
    "Gains Financiers",
    "Maitrise de la Masse Salariale",
    "Outil d'Evalution à llintégration",
    "Plus de contentieux sociaux à gérer",
    "Vous décharge des taches chronophages",
    "Vous permet de vous consacrer à votre coeur de métier",
  ],
};

const useStyles = makeStyles(() => ({
  root: {},
  banner: {
    backgroundImage: "url('/banner_1.jpg')",
    height: "calc(100vh - 240px)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
  },
  image: {
    backgroundImage: "url('side-img.jpg')",
    width: "100%",
    height: "540px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  about: {
    padding: "1em",
  },
  title: {
    textTransform: "uppercase",
    color: "#008ba5",
    textAlign: "left",
    fontSize: "24px",
    marginBottom: "-.2em",
  },
  subTitle: {
    textTransform: "uppercase",
    color: "#008ba5",
    textAlign: "left",
    font: "18px",
    fontWeight: "600",
    marginBottom: "-.2em",
  },
  section1: {
    backgroundColor: "#008ba5",
    padding: "2.5em",
  },
  tip: {
    color: "#ffffff",
    fontWeight: "bolder",
    fontSize: "26px",
    fontFamily: "arial",
  },
  txt: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#ffffff",
  },
  footer: {
    height: "210px",
    backgroundImage: "url('/footer.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    marginBottom: "4em",
    padding: "1em",
    marginTop: "1em",
  },
  pres: {
    textAlign: "justify",
    fontSize: "14px",
    lineHeight: "150%",
  },
  subTxt: {
    textAlign: "left",
    fontSize: "14px",
    lineHeight: "150%",
  },
  input: {
    width: "35%",
    height: "42px",
    border: "none",
    borderRadius: "4px",
    marginRight: "1em",
    backgroundColor: "#c9cfc3",
    opacity: ".6",
    outline: "none",
    fontWeight: "bolder",
    fontSize: "16px",
    padding: "0 1em",
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.banner}></div>
      <Grid container>
        <Grid item sm={7}>
          <div className={classes.about}>
            <h4 className={classes.title}>Qui sommes nous</h4>
            <p className={classes.pres}>
              GLOBAL RH est un Cabinet d'intérim, de placement et de suivi de
              personnels qui permet aux entreprises <br /> d'atteindre leurs
              performances et de s'adapter aux changements technologiques du
              marché de l'emploi.
              <br /> Sa principale mission c'est d'intervenir sur l'ensemble des
              activités liées aux Ressources Humaines.
            </p>

            <h5 className={classes.subTitle}>Vous êtes:</h5>
            <p className={classes.subTxt}>
              Entreprise nationale ou structure (Direction, Agence, Ministère,
              Office et Collectivités locales) <br />
              ONG et Association <br />
              Organisme International <br />
              DECOUVREZ AVEC GLOBAL RH, LES DIMENSIONS DE LA TRANSFORMATION DE
              VOS RESSOURCES <br />
              HUMAINES
            </p>

            <h5 className={classes.subTitle}>Vous voulez</h5>
            <p className={classes.subTxt}>
              Atteindre vos objectifs de performance <br />
              Doper votre croissance <br />
              Accélérer votre développement <br />
            </p>

            <h5 className={classes.subTitle}>Notre credo</h5>
            <p className={classes.subTxt}>
              Etre votre partenaire de choix qui vous accompage dans la
              transfromation de vos ressoures humaines
            </p>
          </div>
        </Grid>
        <Grid item sm={5}>
          <div className={classes.image}></div>
        </Grid>
      </Grid>
      <div className={classes.section1}>
        <Grid container>
          <Grid item sm={4}>
            <img src="/icon 1.png" alt="icon 1" />
            <h4 className={classes.tip}>Simple</h4>
            <p className={classes.txt}>
              Notre platefrome est facile à utiliser
            </p>
            <p className={classes.txt}>Et nécessite aucun installation.</p>
          </Grid>
          <Grid item sm={4}>
            <img src="/icon 2.png" alt="icon 2" />
            <h4 className={classes.tip}>Personnalisable</h4>
            <p className={classes.txt}>Nous vous proposons une platefrome</p>
            <p className={classes.txt}>Qui s'adapte à vos besoin. </p>
          </Grid>
          <Grid item sm={4}>
            <img src="/icon 3.png" alt="icon 3" height="110px" />
            <h4 className={classes.tip}> Lexible</h4>
            <p className={classes.txt}>
              Notre platefrome est évolutive et vous
            </p>
            <p className={classes.txt}>
              Pouvez l'utiliser sans aucune restriction.
            </p>
          </Grid>
        </Grid>
      </div>

      <div style={{ marginTop: "1em", padding: "0 4em" }}>
        <Grid container>
          <Grid item sm={4}>
            <CardInfo sector={sector1} />
          </Grid>
          <Grid item sm={4}>
            <CardInfo sector={sector2} />
          </Grid>
          <Grid item sm={4}>
            <CardInfo sector={sector3} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.footer}>
        <h2>S'INSCRIRE AUX NEWSLETTERS</h2>
        <p style={{ padding: ".5em 5em" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas,{" "}
          <br />
          doloremque fugiat incidunt aut blanditiis
        </p>
        <div>
          <input type="email" className={classes.input} placeholder="Email" />
          <MainButton title="Envoyer" color="#d1004e" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
