import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
//

const styles = {
  navigatorUl: {
    position: "relative",
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: "0",
    margin: "0",
    flexWrap: "wrap",
    "& > li": {
      "&:hover .submenu": {
        display: "flex",
      },
      "&  > a": {
        display: "inline-block",
        padding: "0.5rem 1rem",
        color: "#333",
        textDecoration: "none",
        transition: ".2s",
        position: "relative",
        fontWeight: "700",
        "&::before": {
          content: '""',
          height: "2px",
          width: "0px",
          position: "absolute",
          bottom: "0",
          left: "50%",
          backgroundColor: "#f28283",
          transition: ".2s",
        },
        "&:hover": {
          color: "#f28232",
          "&::before": {
            width: "100%",
            left: "0",
          },
        },
      },
    },
  },
  submenu: {
    position: "absolute",
    zIndex: "9",
    top: "100%",
    left: "0",
    width: "100%",
    backgroundColor: "#fff",
    border: "1px solid #cecece",
    // display: "flex",
    flexWrap: "wrap",
    padding: "1rem",

    display: "none",
    "& ul": {
      listStyle: "none",
      padding: "0",
      height: "fit-content",
      margin: ".75rem",
      "& li": {
        "& a": {
          textDecoration: "none",
          color: "#333",
          fontSize: "0.75rem",
          transition: "all .2s",
          "&:hover": {
            color: "#f28283",
          },
        },
      },
    },
  },
};

//
class Navigator extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <ul className={this.props.classes.navigatorUl}>
          <li>
            <Link to="kadin">KADIN</Link>
            <div className={`submenu ${this.props.classes.submenu}`}>
              <ul>
                <li>
                  <Link style={{ fontSize: "1rem" }}>Giyim</Link>
                </li>
                <li>
                  <Link>Elbise</Link>
                </li>
                <li>
                  <Link>Sweatshirt</Link>
                </li>
                <li>
                  <Link>T-shirt</Link>
                </li>
                <li>
                  <Link>Pantalon</Link>
                </li>
                <li>
                  <Link>Gömlek</Link>
                </li>
                <li>
                  <Link>Mont</Link>
                </li>
                <li>
                  <Link>Eşofman</Link>
                </li>
                <li>
                  <Link>Trençkot</Link>
                </li>
                <li>
                  <Link>Etek</Link>
                </li>
                <li>
                  <Link>Tayt</Link>
                </li>
                <li>
                  <Link>Tesettür</Link>
                </li>
                <li>
                  <Link>Büyük Beden</Link>
                </li>
                <li>
                  <Link>Plaj Giyimi</Link>
                </li>
              </ul>
              <div>
                <ul>
                  <li>
                    <Link style={{ fontSize: "1rem" }}>Ayakkabı</Link>
                  </li>
                  <li>
                    <Link>Topuklu Ayakkabı</Link>
                  </li>
                  <li>
                    <Link>Sneaker</Link>
                  </li>
                  <li>
                    <Link>Günlük Ayakkabı</Link>
                  </li>
                  <li>
                    <Link>Bot & Bootie</Link>
                  </li>
                  <li>
                    <Link>Terlik</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link style={{ fontSize: "1rem" }}>Aksesuar & Çanta</Link>
                  </li>
                  <li>
                    <Link>Çanta</Link>
                  </li>
                  <li>
                    <Link>Saat</Link>
                  </li>
                  <li>
                    <Link>Takı</Link>
                  </li>
                  <li>
                    <Link>Güneş Gözlüğü</Link>
                  </li>
                  <li>
                    <Link>Cüzdan</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link style={{ fontSize: "1rem" }}>Pijama Takımı</Link>
                  </li>
                  <li>
                    <Link>Gecelik</Link>
                  </li>
                  <li>
                    <Link>Sütyen</Link>
                  </li>
                  <li>
                    <Link>İç Çamaşırı Takımları</Link>
                  </li>
                  <li>
                    <Link>Fantazi Giyim</Link>
                  </li>
                  <li>
                    <Link>Çorap</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link style={{ fontSize: "1rem" }}> Lüks & Designer</Link>
                  </li>
                  <li>
                    <Link>Lüks Çanta</Link>
                  </li>
                  <li>
                    <Link>Lüks Giyim</Link>
                  </li>
                  <li>
                    <Link>Lüks Ayakkabı</Link>
                  </li>
                  <li>
                    <Link>Tasarım Giyim</Link>
                  </li>
                  <li>
                    <Link>Tasarım Ayakkabı</Link>
                  </li>
                </ul>
              </div>

              <ul>
                <li>
                  <Link style={{ fontSize: "1rem" }}>
                    Kozmetik & Kişisel Bakım
                  </Link>
                </li>
                <li>
                  <Link>Parfüm</Link>
                </li>
                <li>
                  <Link>Göz makyajı</Link>
                </li>
                <li>
                  <Link>Cilt Bakımı</Link>
                </li>
                <li>
                  <Link>Saç Bakımı</Link>
                </li>
                <li>
                  <Link>Makyaj</Link>
                </li>
                <li>
                  <Link>Ağız Bakımı</Link>
                </li>
                <li>
                  <Link>Cinsel Sağlık</Link>
                </li>
                <li>
                  <Link>Hijyenik Ped</Link>
                </li>
                <li>
                  <Link>Epilasyon Ürünleri  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="erkek">ERKEK</Link>
            <div className={`submenu ${this.props.classes.submenu}`}>
              <ul>
                <li>
                  <Link style={{ fontSize: "1rem" }}>Giyim</Link>
                </li>
                <li>
                  <Link>T-shirt</Link>
                </li>
                <li>
                  <Link>Sweartshirt</Link>
                </li>
                <li>
                  <Link>Kazak & Hırka</Link>
                </li>
                <li>
                  <Link>Gömlek</Link>
                </li>
                <li>
                  <Link>Eşofman</Link>
                </li>
                <li>
                  <Link>Pantolon</Link>
                </li>
                <li>
                  <Link>Ceket</Link>
                </li>
                <li>
                  <Link>Jean</Link>
                </li>
                <li>
                  <Link>Polo Yaka T-shirt</Link>
                </li>
                <li>
                  <Link>Takım Elbise</Link>
                </li>
                <li>
                  <Link>Şort</Link>
                </li>
              </ul>
              <div>
                <ul>
                  <li>
                    <Link style={{ fontSize: "1rem" }}>Ayakkabı</Link>
                  </li>
                  <li>
                    <Link>Spor Ayakkabı</Link>
                  </li>
                  <li>
                    <Link>Günlük Ayakkabı</Link>
                  </li>
                  <li>
                    <Link>Sneaker</Link>
                  </li>
                  <li>
                    <Link>Klassik</Link>
                  </li>
                  <li>
                    <Link>Koşu & Antreman</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link style={{ fontSize: "1rem" }}>
                      Kozmetik & Kişisel Bakım
                    </Link>
                  </li>
                  <li>
                    <Link>Parfüm</Link>
                  </li>
                  <li>
                    <Link>Cinsel Sağlık</Link>
                  </li>
                  <li>
                    <Link>Traş Makinesi</Link>
                  </li>
                  <li>
                    <Link>Traş Bıçağı</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link style={{ fontSize: "1rem" }}>
                      Saat & Gözlük & Aksesuar
                    </Link>
                  </li>
                  <li>
                    <Link>Saat</Link>
                  </li>
                  <li>
                    <Link>Güneş Gözlüğü</Link>
                  </li>
                  <li>
                    <Link>Cüzdan</Link>
                  </li>
                  <li>
                    <Link>Kemer</Link>
                  </li>
                  <li>
                    <Link>Çanta</Link>
                  </li>
                  <li>
                    <Link>Erkek Takı</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link style={{ fontSize: "1rem" }}>İç Giyim</Link>
                  </li>
                  <li>
                    <Link>Boxer</Link>
                  </li>
                  <li>
                    <Link>Çorap</Link>
                  </li>
                  <li>
                    <Link>Pijama</Link>
                  </li>
                  <li>
                    <Link>Atlet</Link>
                  </li>
                </ul>
              </div>
              <ul>
                <li>
                  <Link style={{ fontSize: "1rem" }}>Spor & Outdoor</Link>
                </li>
                <li>
                  <Link>Eşofman</Link>
                </li>
                <li>
                  <Link>Spor Ayakkabı</Link>
                </li>
                <li>
                  <Link>T-shirt</Link>
                </li>
                <li>
                  <Link>Sweatshirt</Link>
                </li>
                <li>
                  <Link>Forma</Link>
                </li>
                <li>
                  <Link>Outdoor Giyim</Link>
                </li>
                <li>
                  <Link>Outdoor Ayakkabı</Link>
                </li>
                <li>
                  <Link>Spor Ekipmanları</Link>
                </li>
                <li>
                  <Link>Outdoor Ekipmanları</Link>
                </li>
                <li>
                  <Link>Sporcu Besinleri</Link>
                </li>
                <li>
                  <Link>Sporcu Aksesuarları</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link style={{ fontSize: "1rem" }}>Elektronik</Link>
                </li>
                <li>
                  <Link>Traş Makinesi</Link>
                </li>
                <li>
                  <Link>Cep Telefonu</Link>
                </li>
                <li>
                  <Link>Akıllı Saat</Link>
                </li>
                <li>
                  <Link>Bilgisayar</Link>
                </li>
                <li>
                  <Link>Oyun & Konsollar</Link>
                </li>
                <li>
                  <Link>Akıllı Bileklik </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="cocuk">ÇOCUK</Link>
          </li>
          <li>
            <Link to="ev&yasam">EV & YAŞAM</Link>
          </li>
          <li>
            <Link to="supermarket">SÜPERMARKET</Link>
          </li>
          <li>
            <Link to="kozmetik">KOZMETİK</Link>
          </li>
          <li>
            <Link to="ayakkabi&canta">AYAKKABI & ÇANTA</Link>
          </li>
          <li>
            <Link to="saat">SAAT & AKSESUAR</Link>
          </li>
          <li>
            <Link to="elektronik">ELEKTRONİK</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Navigator);
