import React from "react";

class Date extends React.Component {
  searchIndex(dateValues) {
    for (let i of dateValues) {
      if (typeof i === "object") {
        return dateValues.indexOf(i);
      }
    }
  }
  render() {
    const dateValues = Object.values(this.props.data.date);
    dateValues.splice(this.searchIndex(dateValues), 1);
    let cor = {
      1: "Janvier",
      2: "Février",
      3: "Mars",
      4: "Avril",
      5: "Mai",
      6: "Juin",
      7: "Juillet",
      8: "Août",
      9: "Septembre",
      10: "Octobre",
      11: "Novembre",
      12: "Décembre"
    };
    let date = this.props.data.date;
    let jours = date.dayOfMonth;
    let mois = date.monthValue;
    let annee = date.year;

    return (
      <div className = "Date">
          {jours} {cor[mois]} {annee}
      </div>
    );
  }
}

export default Date;
