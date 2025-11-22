import "./FormCheckout.css";

const FormCheckout = ({ dataForm, handleChangeInput, sendOrder }) => {
  return (
    <div className="container-form">
      <h2>Complete su Orden</h2>
      <form onSubmit={sendOrder} className="form">
        <input
          type="text"
          name="fullname"
          value={dataForm.fullname}
          onChange={handleChangeInput}
          placeholder="Ingrese su nombre completo"
          className="inputs"
          required
        />
        <input
          type="number"
          name="phone"
          value={dataForm.phone}
          onChange={handleChangeInput}
          placeholder="Ingrese su numero celular"
          className="inputs"
          required
        />
        <input
          type="email"
          name="email"
          value={dataForm.email}
          onChange={handleChangeInput}
          placeholder="Ingrese su email"
          className="inputs"
          required
        />

        <button className="buttom-send">Enviar Orden</button>
      </form>
    </div>
  );
};

export default FormCheckout;
