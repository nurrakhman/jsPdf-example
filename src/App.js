import React, { PureComponent } from "react";
import * as jsPDF from "jspdf";
import "jspdf-autotable";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img id="logo" src="assets/logo.png" hidden />
        <img id="pertamina" src="assets/pertamina.png" hidden />
        <button onClick={this.jsPDFGenerator}>Generate PDF</button>
      </div>
    );
  }

  jsPDFGenerator = () => {
    var logo = document.getElementById("logo");
    var pertamina = document.getElementById("pertamina");
    var nota = new jsPDF("landscape", "pt", "a5");

    //nota.addImage(logo, "JPEG", 10, 10, 53, 64);
    //nota.addImage(pertamina, "JPEG", 405, 25, 160, 38);
    nota.setFontSize(10);
    nota.setFontType("bold");
    nota.text(65, 25, "PT. INDOTRANS SEJAHTERA");
    nota.setFontSize(10);
    nota.text(65, 38, "AGEN BBM PERTAMINA");
    nota.setFontSize(8);
    nota.setFontType("normal");
    nota.text(65, 50, "Jln Panglima Batur Kompleks Citra Niaga Blok B-12");
    nota.text(65, 60, "Samarinda 75112, Kalimantan Timur");
    nota.text(
      65,
      70,
      "Telp. (0541) 743717, Fax. (0541) 200743, Email : indotrans.sejahtera@gmail.com"
    );
    nota.setFontSize(15);
    nota.setFontType("bold");
    nota.text(65, 120, "SURAT JALAN PENGIRIMAN BBM");
    nota.setLineWidth(2);
    nota.line(65, 123, 309, 123);

    nota.text(85, 145, "No.");
    nota.text(120, 145, "016207");

    nota.setFontSize(11);
    nota.setFontType("normal");
    nota.text(370, 90, "Tgl pengiriman");
    nota.text(445, 90, ": 15 JUNI 2020");

    nota.text(370, 105, "No. Pol Mobil");
    nota.text(445, 105, ": KT 8072 NU");

    nota.text(370, 120, "Nama Driver");
    nota.text(445, 120, ": Selamat");

    nota.text(370, 135, "No. PO");
    nota.setFontSize(10);
    nota.text(445, 135, ": 036/MMG-15/BAS/VI/2020");

    nota.setFontSize(11);
    nota.text(370, 150, "Tujuan / Site");
    nota.text(445, 150, ": PT. BAS");

    nota.setFontSize(8);
    nota.text(
      60,
      165,
      "PT.BERKAT ANUGRAH SEJAHTERA QQ. PT MITRAMAJU GEMILANG, LOKASI DUSUN IV BERHALA/LOA KULU"
    );
    nota.autoTable({
      head: [["NO", "JENIS BARANG", "JUMLAH", "NO SEGEL", "KETERANGAN"]],
      body: [
        [
          "1",
          "BBM SOLAR INDUSTRI",
          "10.000 LITER",
          "Atas: 0027304 \n Bawah: 0027305",
          "BAIK"
        ],
         ["1", "BBM SOLAR INDUSTRI", "10.000 LITER", "Atas: 0027304 \n Bawah: 0027305", "BAIK"],
         //["1", "BBM SOLAR INDUSTRI", "10.000 LITER", "Atas: 0027304 \n Bawah: 0027305", "BAIK"],
        // ["1", "BBM SOLAR INDUSTRI", "10.000 LITER", "Atas: 0027304 \n Bawah: 0027305", "BAIK"],
        // ["1", "BBM SOLAR INDUSTRI", "10.000 LITER", "Atas: 0027304 \n Bawah: 0027305", "BAIK"]
      ],
      startY: 175,
      theme: "grid",
      styles: {
        lineColor: [0, 0, 0],
        lineWidth: 1,
        fontSize: 9
      },
      headStyles: {
        fillColor: [241, 15, 15],
        halign: "center",
        valign: "middle"
      },
      bodyStyles: {
        halign: "center",
        cellWidth: "wrap"
      }
    });
    nota.setFontSize(8);
    nota.setFontType("bold");
    nota.text(40, nota.lastAutoTable.finalY + 15, "Perhatian !!");
    nota.setFontType("normal");
    nota.text(
      40,
      nota.lastAutoTable.finalY + 25,
      "Kami dari PT.INDOTRANS SEJAHTERA tidak akan menerima claim / tuntutan apapun jika BBM / Barang telah diserahkan. Maka dari itu harap"
    );
    nota.text(
      40,
      nota.lastAutoTable.finalY + 35,
      "diperiksa terlebih dahulu sebelum menandatangani surat pengiriman BBM ini"
    );
    nota.setFontType("bold");
    nota.setFontSize(9);
    nota.text(40, nota.lastAutoTable.finalY + 80, "Yang Menerima BBM,")
    nota.text(40, nota.lastAutoTable.finalY + 140, "( ................................ )")

    nota.text(252, nota.lastAutoTable.finalY + 80, "Driver Mobil / Tangki,")
    nota.text(250, nota.lastAutoTable.finalY + 140, "( ................................ )")

    nota.text(477, nota.lastAutoTable.finalY + 80, "Dibuat Oleh,")
    nota.text(460, nota.lastAutoTable.finalY + 140, "( ................................ )")
    //nota.output('dataurlnewwindow');
    window.open(nota.output("bloburl"));
  };
}
