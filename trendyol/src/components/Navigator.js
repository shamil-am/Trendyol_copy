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
    borderTop: "1px solid #cecece",
    borderBottom: "1px solid #cecece",
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
        fontWeight: "700",
        position: "relative",

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
    zIndex: "99",
    top: "100%",
    left: "0",
    width: "-webkit-fill-available",
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
      margin: ".75rem 1.5rem",
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
      <div style={{ width: "100%", paddingBottom: "1rem" }}>
        <ul className={this.props.classes.navigatorUl}>
          <li>
            <Link to="kadin">KADIN</Link>
            <div className={`submenu ${this.props.classes.submenu}`}>
              <ul>
                <li>
                  <Link to="/" style={{ fontSize: "1rem", fontWeight: "600" }}>
                    Giyim
                  </Link>
                </li>
                <li>
                  <Link to="/">Elbise</Link>
                </li>
                <li>
                  <Link to="/">Sweatshirt</Link>
                </li>
                <li>
                  <Link to="/">T-shirt</Link>
                </li>
                <li>
                  <Link to="/">Pantalon</Link>
                </li>
                <li>
                  <Link to="/">Gömlek</Link>
                </li>
                <li>
                  <Link to="/">Mont</Link>
                </li>
                <li>
                  <Link to="/">Eşofman</Link>
                </li>
                <li>
                  <Link to="/">Trençkot</Link>
                </li>
                <li>
                  <Link to="/">Etek</Link>
                </li>
                <li>
                  <Link to="/">Tayt</Link>
                </li>
                <li>
                  <Link to="/">Tesettür</Link>
                </li>
                <li>
                  <Link to="/">Büyük Beden</Link>
                </li>
                <li>
                  <Link to="/">Plaj Giyimi</Link>
                </li>
              </ul>
              <div>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Ayakkabı
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Topuklu Ayakkabı</Link>
                  </li>
                  <li>
                    <Link to="/">Sneaker</Link>
                  </li>
                  <li>
                    <Link to="/">Günlük Ayakkabı</Link>
                  </li>
                  <li>
                    <Link to="/">Bot & Bootie</Link>
                  </li>
                  <li>
                    <Link to="/">Terlik</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Aksesuar & Çanta
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Çanta</Link>
                  </li>
                  <li>
                    <Link to="/">Saat</Link>
                  </li>
                  <li>
                    <Link to="/">Takı</Link>
                  </li>
                  <li>
                    <Link to="/">Güneş Gözlüğü</Link>
                  </li>
                  <li>
                    <Link to="/">Cüzdan</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Pijama Takımı
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Gecelik</Link>
                  </li>
                  <li>
                    <Link to="/">Sütyen</Link>
                  </li>
                  <li>
                    <Link to="/">İç Çamaşırı Takımları</Link>
                  </li>
                  <li>
                    <Link to="/">Fantazi Giyim</Link>
                  </li>
                  <li>
                    <Link to="/">Çorap</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      {" "}
                      Lüks & Designer
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Lüks Çanta</Link>
                  </li>
                  <li>
                    <Link to="/">Lüks Giyim</Link>
                  </li>
                  <li>
                    <Link to="/">Lüks Ayakkabı</Link>
                  </li>
                  <li>
                    <Link to="/">Tasarım Giyim</Link>
                  </li>
                  <li>
                    <Link to="/">Tasarım Ayakkabı</Link>
                  </li>
                </ul>
              </div>

              <ul>
                <li>
                  <Link to="/" style={{ fontSize: "1rem", fontWeight: "600" }}>
                    Kozmetik & Kişisel Bakım
                  </Link>
                </li>
                <li>
                  <Link to="/">Parfüm</Link>
                </li>
                <li>
                  <Link to="/">Göz makyajı</Link>
                </li>
                <li>
                  <Link to="/">Cilt Bakımı</Link>
                </li>
                <li>
                  <Link to="/">Saç Bakımı</Link>
                </li>
                <li>
                  <Link to="/">Makyaj</Link>
                </li>
                <li>
                  <Link to="/">Ağız Bakımı</Link>
                </li>
                <li>
                  <Link to="/">Cinsel Sağlık</Link>
                </li>
                <li>
                  <Link to="/">Hijyenik Ped</Link>
                </li>
                <li>
                  <Link to="/">Epilasyon Ürünleri  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="erkek">ERKEK</Link>
            <div className={`submenu ${this.props.classes.submenu}`}>
              <ul>
                <li>
                  <Link to="/" style={{ fontSize: "1rem", fontWeight: "600" }}>
                    Giyim
                  </Link>
                </li>
                <li>
                  <Link to="/">T-shirt</Link>
                </li>
                <li>
                  <Link to="/">Sweartshirt</Link>
                </li>
                <li>
                  <Link to="/">Kazak & Hırka</Link>
                </li>
                <li>
                  <Link to="/">Gömlek</Link>
                </li>
                <li>
                  <Link to="/">Eşofman</Link>
                </li>
                <li>
                  <Link to="/">Pantolon</Link>
                </li>
                <li>
                  <Link to="/">Ceket</Link>
                </li>
                <li>
                  <Link to="/">Jean</Link>
                </li>
                <li>
                  <Link to="/">Polo Yaka T-shirt</Link>
                </li>
                <li>
                  <Link to="/">Takım Elbise</Link>
                </li>
                <li>
                  <Link to="/">Şort</Link>
                </li>
              </ul>
              <div>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Ayakkabı
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Spor Ayakkabı</Link>
                  </li>
                  <li>
                    <Link to="/">Günlük Ayakkabı</Link>
                  </li>
                  <li>
                    <Link to="/">Sneaker</Link>
                  </li>
                  <li>
                    <Link to="/">Klassik</Link>
                  </li>
                  <li>
                    <Link to="/">Koşu & Antreman</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Kozmetik & Kişisel Bakım
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Parfüm</Link>
                  </li>
                  <li>
                    <Link to="/">Cinsel Sağlık</Link>
                  </li>
                  <li>
                    <Link to="/">Traş Makinesi</Link>
                  </li>
                  <li>
                    <Link to="/">Traş Bıçağı</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Saat & Gözlük & Aksesuar
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Saat</Link>
                  </li>
                  <li>
                    <Link to="/">Güneş Gözlüğü</Link>
                  </li>
                  <li>
                    <Link to="/">Cüzdan</Link>
                  </li>
                  <li>
                    <Link to="/">Kemer</Link>
                  </li>
                  <li>
                    <Link to="/">Çanta</Link>
                  </li>
                  <li>
                    <Link to="/">Erkek Takı</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      İç Giyim
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Boxer</Link>
                  </li>
                  <li>
                    <Link to="/">Çorap</Link>
                  </li>
                  <li>
                    <Link to="/">Pijama</Link>
                  </li>
                  <li>
                    <Link to="/">Atlet</Link>
                  </li>
                </ul>
              </div>
              <ul>
                <li>
                  <Link to="/" style={{ fontSize: "1rem", fontWeight: "600" }}>
                    Spor & Outdoor
                  </Link>
                </li>
                <li>
                  <Link to="/">Eşofman</Link>
                </li>
                <li>
                  <Link to="/">Spor Ayakkabı</Link>
                </li>
                <li>
                  <Link to="/">T-shirt</Link>
                </li>
                <li>
                  <Link to="/">Sweatshirt</Link>
                </li>
                <li>
                  <Link to="/">Forma</Link>
                </li>
                <li>
                  <Link to="/">Outdoor Giyim</Link>
                </li>
                <li>
                  <Link to="/">Outdoor Ayakkabı</Link>
                </li>
                <li>
                  <Link to="/">Spor Ekipmanları</Link>
                </li>
                <li>
                  <Link to="/">Outdoor Ekipmanları</Link>
                </li>
                <li>
                  <Link to="/">Sporcu Besinleri</Link>
                </li>
                <li>
                  <Link to="/">Sporcu Aksesuarları</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/" style={{ fontSize: "1rem", fontWeight: "600" }}>
                    Elektronik
                  </Link>
                </li>
                <li>
                  <Link to="/">Traş Makinesi</Link>
                </li>
                <li>
                  <Link to="/">Cep Telefonu</Link>
                </li>
                <li>
                  <Link to="/">Akıllı Saat</Link>
                </li>
                <li>
                  <Link to="/">Bilgisayar</Link>
                </li>
                <li>
                  <Link to="/">Oyun & Konsollar</Link>
                </li>
                <li>
                  <Link to="/">Akıllı Bileklik </Link>
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
