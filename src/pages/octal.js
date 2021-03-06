import React from "react";

export default class Octal extends React.Component {
  constructor() {
    super();
    this.state = {
      oktal: "",
      konversi: "",
      hasil: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let oktal = this.state.oktal;
    let konversi = this.state.konversi;

    let bil = Number(oktal);
    let dcml = parseInt(bil, 8);
    let jumlah;

    if (konversi === "biner") {
      jumlah = dcml.toString(2);
    } else if (konversi === "desimal") {
      jumlah = dcml;
    } else if (konversi === "hexadesimal") {
      jumlah = dcml.toString(16).toUpperCase();
    }

    this.setState({
      hasil: jumlah,
    });
  };

  render() {
    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-header bg-danger text-white">
            <h2 className="text-center">Konversi Bilangan Oktal</h2>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row mt-3">
                <div className="col-4">
                  <p>Oktal :</p>
                </div>
                <div className="col-8">
                  <input className="form-control" name="oktal" type="number" value={this.state.oktal} onChange={this.handleChange} />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-4">
                  <p>Pilihan Konversi :</p>
                </div>
                <div className="col-8">
                  <select className="form-select" name="konversi" aria-label="Default select example" onChange={this.handleChange} required>
                    <option></option>
                    <option value="biner">Binary</option>
                    <option value="desimal">Desimal</option>
                    <option value="hexadesimal">Heksadesimal</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-100 btn btn-danger mt-4 mb-3 text-white">
                Konversi
              </button>
            </form>
          </div>
          <div className="card-footer">
            <h2 className="text-center mb-3 text-black">Hasil</h2>
            <button className="w-100 alert alert-success text-black" name="result">
              {this.state.hasil}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
