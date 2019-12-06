import React from "react";
import Header from "./Header";
import Center from "./Center";
import SidebarR from "./SidebarR";
import SidebarL from "./SidebarL";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equiList: {
        "carbon dioxide": "Dioxyde de carbone",
        "carbon monoxide": "Monoxyde de carbone",
        dinitrogen: "Diazote",
        dioxygene: "Dioxygène",
        "legionelle pneumophila": "Legionelle pneumophila",
        "nitrogen dioxide ": "Dioxyde d'azote",
        "sulphur dioxide": "Dioxyde de souffre",
        "atmospheric pressure": "Pression atmosphérique",
        "energy use": "Consommation d'énergie",
        "escherichia coli": "Escherichia coli",
        "listeria monocytogenes": "Listeria monocytogenes",
        "salmonella enterica": "Salmonella enterica",
        temperature: "Température",
        bicarbonate: "Bicarbonate",
        calcium: "Calcium",
        chlorures: "Chlorures",
        fluorures: "Fluorures",
        "heavy metals": "Métaux lourds",
        magnesium: "Magnésium",
        nitrates: "Nitrates",
        silice: "Silice",
        sodium: "Sodium",
        sulfates: "Sulfates",
        "vibrio cholerea": "Vibrio cholerea"
      }
    };
  }

  getCritical(ele) {
    return [ele.unit, ele.min, ele.max];
  }

  getActual(ele) {
    return ele.value;
  }

  getValues(nameElement) {
    // PREND LE NOM de l'élément et renvoie les info actuelle
    let valActual = Object.values(this.props.data.data);
    for (let a of valActual) {
      if (a.name === nameElement) {
        return this.getActual(a);
      }
    }
  }

  getCritics() {
    let valCritique = Object.values(this.props.doc.data);
    for (let a of valCritique) {
      if (a.unit === undefined) {
        for (let b of Object.values(a)) {
          const key = Object.keys(a).find(key => a[key] === b);
          let frenchName = this.state.equiList[key];
          b.value = this.getValues(frenchName);
          b.name = frenchName;
        }
      } else {
        const key = Object.keys(this.props.doc.data).find(
          key => this.props.doc.data[key] === a
        );
        let frenchName = this.state.equiList[key];
        a.value = this.getValues(frenchName);
        a.name = frenchName;
      }
    }
  }

  render() {
    this.getCritics();
    return (
      <div className='Board'>
        <Header data={this.props.data["breaking news"]} />
        <SidebarL data={this.props.doc.data} />
        <Center data={this.props.data} doc={this.props.doc} />

        <SidebarR data={this.props.doc.data} />
      </div>
    );
  }
}

export default Board;
