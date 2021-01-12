import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Central from './Central'
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
          backgroundColor: Central.hoveredColor,
          transition: ".2s",
        },
        "&:hover": {
          color: Central.hoveredColor,
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
            color: Central.hoveredColor,
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
            <div className={`submenu ${this.props.classes.submenu}`}>
              <div>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Bebek
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Bebek Takimlari</Link>
                  </li>
                  <li>
                    <Link to="/">Ayakkabi</Link>
                  </li>
                  <li>
                    <Link to="/">Hastane Cikisi</Link>
                  </li>
                  <li>
                    <Link to="/">Tulum & Salopet</Link>
                  </li>
                  <li>
                    <Link to="/">Body & Zibin</Link>
                  </li>
                  <li>
                    <Link to="/">T-shirt & Atlet</Link>
                  </li>
                  <li>
                    <Link to="/">Elbise</Link>
                  </li>
                  <li>
                    <Link to="/">Sort</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                      }}
                    >
                      Bebek Bezi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                      }}
                    >
                      Bebek Mamasi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                      }}
                    >
                      Islak Mendil
                    </Link>
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
                      Kiz Cocuk
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Elbise</Link>
                  </li>
                  <li>
                    <Link to="/">Sweatshirt</Link>
                  </li>
                  <li>
                    <Link to="/">Spor Ayakkabi</Link>
                  </li>
                  <li>
                    <Link to="/">Esofman</Link>
                  </li>
                  <li>
                    <Link to="/">Ic giyim & Pijama</Link>
                  </li>
                  <li>
                    <Link to="/">T-shirt & Atlet</Link>
                  </li>
                  <li>
                    <Link to="/">Tayt</Link>
                  </li>
                  <li>
                    <Link to="/">Gunluk ayakkabi</Link>
                  </li>
                  <li>
                    <Link to="/">Sort</Link>
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
                      {" "}
                      Erkek Cocuk
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Sweatshirt</Link>
                  </li>
                  <li>
                    <Link to="/">Spor Ayakkabi</Link>
                  </li>
                  <li>
                    <Link to="/">Esofman</Link>
                  </li>
                  <li>
                    <Link to="/">Ic giyim & Pijama</Link>
                  </li>
                  <li>
                    <Link to="/">T-shirt & Atlet</Link>
                  </li>
                  <li>
                    <Link to="/">Gunluk Ayakkbi</Link>
                  </li>
                  <li>
                    <Link to="/">Okul Cantasi</Link>
                  </li>
                  <li>
                    <Link to="/">Sort</Link>
                  </li>
                  <li>
                    <Link to="/">Gomlek</Link>
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
                      Bebek Takim
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Banyo & Tuvalet</Link>
                  </li>
                  <li>
                    <Link to="/">Bebek Sampuani</Link>
                  </li>
                  <li>
                    <Link to="/">Krem Yaglar</Link>
                  </li>
                  <li>
                    <Link to="/">Bebek Cantasi</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Oyuncak
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Egitici Oyuncaklar</Link>
                  </li>
                  <li>
                    <Link to="/">Oyuncak Araba</Link>
                  </li>
                  <li>
                    <Link to="/">Oyuncak Bebek</Link>
                  </li>
                  <li>
                    <Link to="/">Bebek & Okul Oncesi</Link>
                  </li>
                  <li>
                    <Link to="/">Kumandali Oyuncaklar</Link>
                  </li>
                  <li>
                    <Link to="/">Oyun Hamuru</Link>
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
                      Tasima & Guvenlik
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Bebek arabasi & Puset</Link>
                  </li>
                  <li>
                    <Link to="/">Park Yatak</Link>
                  </li>
                  <li>
                    <Link to="/">Ana Kucagi</Link>
                  </li>
                  <li>
                    <Link to="/">Port Bebe & Kanguru</Link>
                  </li>
                  <li>
                    <Link to="/">Yurutec</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Besleme & Emzirme
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Biberon & Emzik</Link>
                  </li>
                  <li>
                    <Link to="/">Gogus Pompasi</Link>
                  </li>
                  <li>
                    <Link to="/">Mama Sandalyesi</Link>
                  </li>
                  <li>
                    <Link to="/">Alistirma Bardagi</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link to="ev&yasam">EV & YAŞAM</Link>
            <div className={`submenu ${this.props.classes.submenu}`}>
              <div>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Sofra & Mutfak
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Yemek Takimi</Link>
                  </li>
                  <li>
                    <Link to="/">Catal Kasib Bicak Seti</Link>
                  </li>
                  <li>
                    <Link to="/">Baharat Takimi</Link>
                  </li>
                  <li>
                    <Link to="/">Fincan & Kupa</Link>
                  </li>
                  <li>
                    <Link to="/">Firin & Kek Kalibi</Link>
                  </li>
                  <li>
                    <Link to="/">Caydanlik</Link>
                  </li>
                  <li>
                    <Link to="/">Tencere Seti</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Banyo
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Havlu & Havlu seti</Link>
                  </li>
                  <li>
                    <Link to="/">Bornoz</Link>
                  </li>
                  <li>
                    <Link to="/">Banyo Seti</Link>
                  </li>
                  <li>
                    <Link to="/">Banyo Paspasi</Link>
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
                      Ev Tekstili
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Yatak Odasi</Link>
                  </li>
                  <li>
                    <Link to="/">Hali & Kilim & Paspas</Link>
                  </li>
                  <li>
                    <Link to="/">Banyo</Link>
                  </li>
                  <li>
                    <Link to="/">Perde</Link>
                  </li>
                  <li>
                    <Link to="/">Nevresim Takimi</Link>
                  </li>
                  <li>
                    <Link to="/">Yastik</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Ev Dekorasyon
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Dekorativ Aksesuar</Link>
                  </li>
                  <li>
                    <Link to="/">Tablo</Link>
                  </li>
                  <li>
                    <Link to="/">Duvar Kagidi</Link>
                  </li>
                  <li>
                    <Link to="/">Ayna</Link>
                  </li>
                  <li>
                    <Link to="/">Sanat</Link>
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
                      Aydinlatma
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Avize</Link>
                  </li>
                  <li>
                    <Link to="/">Lambader</Link>
                  </li>
                  <li>
                    <Link to="/">Abajur</Link>
                  </li>
                  <li>
                    <Link to="/">Mobilya</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Ev Gerecleri
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Duzenleyici</Link>
                  </li>
                  <li>
                    <Link to="/">Camasirlik</Link>
                  </li>
                  <li>
                    <Link to="/">Pratik Temizlik</Link>
                  </li>
                  <li>
                    <Link to="/">Gerecleri</Link>
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
                      Hobi
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Kitap</Link>
                  </li>
                  <li>
                    <Link to="/">Puzzle</Link>
                  </li>
                  <li>
                    <Link to="/">Boya & Kesim</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Kirtasiye & Ofis
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Defter</Link>
                  </li>
                  <li>
                    <Link to="/">Kalem</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Spor & Outdoor
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Kosu Bandi</Link>
                  </li>
                  <li>
                    <Link to="/">Dumbell & Agirlik</Link>
                  </li>
                  <li>
                    <Link to="/">Pilates & Yoga</Link>
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
                      Otomobil & Motosiklet
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Oto Aksesuar</Link>
                  </li>
                  <li>
                    <Link to="/">Oto Paspasi</Link>
                  </li>
                  <li>
                    <Link to="/">Oto Lastik</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      Yapi Market
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Banyo yapi <br />
                      Malzemeleri
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Elektikli El Aleti</Link>
                  </li>
                  <li>
                    <Link to="/">Hirdavat Urunleri</Link>
                  </li>
                  <li>
                    <Link to="/">Boya</Link>
                  </li>
                </ul>
              </div>
            </div>
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
