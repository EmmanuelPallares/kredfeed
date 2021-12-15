import React from "react";
import Header from "./Components/Header";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Textfield from "./Components/FormsUI/Textfield";
import Select from "./Components/FormsUI/Select";
import DateTimePicker from "./Components/FormsUI/DataTimePicker";
import Input from "./Components/FormsUI/Upload";
import Checkbox from "./Components/FormsUI/Checkbox";
import Button from "./Components/FormsUI/Button";
import countries from "./data/countries.json";
import razonSocial from "./data/razonSocial.json";
import regimenFiscal from "./data/regimenFiscal.json";
import industria from "./data/industria.json";
import genero from "./data/genero.json";
import estadoCivil from "./data/estadoCivil.json";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  razonSocial: "",
  nombreComercial: "",
  nacionalidad: "",
  fechaConstitucion: "",
  rfc: "",
  regimenFiscal: "",
  industria: "",
  calleAvenida: "",
  codigoPostal: "",
  colonia: "",
  ciudadPoblacion: "",
  entidadEstado: "",
  paisDomicilio: "",
  comprobanteDomicilio: "",
  numeroTelefono: "",
  email: "",
  representanteLegal: "",
  genero: "",
  fechaNacimiento: "",
  entidadNacimiento: "",
  nacionalidadRepresentante: "",
  curpRepresentante: "",
  rfcRepresentante: "",
  domicilioRepresentante: "",
  estadoCivil: "",
  emailRepresentante: "",
  telefonoRepresentante: "",
  ine: "",
  cuentaBancaria: "",
  banco: "",
  terminosCondiciones: false,
};

const FORM_VALIDATION = Yup.object().shape({
  razonSocial: Yup.string().required("Campo obligatorio"),
  nombreComercial: Yup.string().required("Campo obligatorio"),
  nacionalidad: Yup.string().required("Campo obligatorio"),
  fechaConstitucion: Yup.date().required("Campo obligatorio"),
  rfc: Yup.string().required("Campo obligatorio"),
  regimenFiscal: Yup.string().required("Campo obligatorio"),
  industria: Yup.string().required("Campo obligatorio"),
  calleAvenida: Yup.string().required("Campo obligatorio"),
  numeroExterior: Yup.number().required("Campo obligatorio"),
  numeroInterior: Yup.number(),
  codigoPostal: Yup.number().required("Campo obligatorio"),
  colonia: Yup.string().required("Campo obligatorio"),
  ciudadPoblacion: Yup.string().required("Campo obligatorio"),
  entidadEstado: Yup.string().required("Campo obligatorio"),
  paisDomicilio: Yup.string().required("Campo obligatorio"),
  numeroTelefono: Yup.number()
    .integer()
    .typeError("Favor de ingresar un número valido")
    .required("Campo obligatorio"),
  email: Yup.string().email("Email Invalido").required("Campo obligatorio"),
  representanteLegal: Yup.string().required("Campo obligatorio"),
  genero: Yup.string(),
  fechaNacimiento: Yup.date().required("Campo obligatorio"),
  entidadNacimiento: Yup.string().required("Campo obligatorio"),
  comprobanteDomicilio: Yup.string().required("Campo obligatorio"),
  paisNacimiento: Yup.string().required("Campo obligatorio"),
  nacionalidadRepresentante: Yup.string().required("Campo obligatorio"),
  curpRepresentante: Yup.string().required("Campo obligatorio"),
  rfcRepresentante: Yup.string().required("Campo obligatorio"),
  domicilioRepresentante: Yup.string().required("Campo obligatorio"),
  estadoCivil: Yup.string(),
  emailRepresentante: Yup.string()
    .email("Email Invalido")
    .required("Campo obligatorio"),
  telefonoRepresentante: Yup.number()
    .integer()
    .typeError("Favor de ingresar un número valido")
    .required("Campo obligatorio"),
  ine: Yup.string().required("Campo obligatorio"),
  cuentaBancaria: Yup.number().integer().required(),
  banco: Yup.string().required("Campo obligatorio"),
  terminosCondiciones: Yup.boolean(true),
});

const App = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                alert(values.toJSON);
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography>Datos Fiscales</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="nombreComercial"
                      label="*Nombre Comercial"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Select
                      name="razonSocial"
                      label="*Razon Social"
                      options={razonSocial}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Select
                      name="nacionalidad"
                      label="*Nacionalidad"
                      options={countries}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                      name="fechaConstitucion"
                      label="*Fecha de Constitución"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="rfc" label="*RFC" />
                  </Grid>
                  <Grid item xs={6}>
                    <Select
                      name="regimenFiscal"
                      label="*Régimen Fiscal"
                      options={regimenFiscal}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Select
                      name="industria"
                      label="*Industria"
                      options={industria}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Domicilio</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="calleAvenida" label="*Calle o Avenida" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="numeroExterior" label="*Número Exterior" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="numeroInterior" label="Número Interior" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="codigoPostal" label="*Código Postal" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="colonia" label="*Colonia o Urbanización" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="ciudadPoblacion"
                      label="*Ciudad o Población"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="entidadEstado" label="*Estado" />
                  </Grid>

                  <Grid item xs={12}>
                    <Select
                      name="paisDomicilio"
                      label="*País"
                      options={countries}
                    />
                  </Grid>

                  {/* Comprobante domicilio */}

                  <Grid item xs={12}>
                    <Typography>*Subir Comprobante de domicilio</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Input type="file" name="comprobanteDomicilio" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="numeroTelefono" label="*Teléfono" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="email" label="*Email" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Representante Legal</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="representanteLegal"
                      label="*Nombre Completo"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Select name="genero" label="Genero" options={genero} />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                      name="fechaNacimiento"
                      label="*Fecha de Nacimiento"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="entidadNacimiento"
                      label="*Entidad o estado de nacimiento"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Select
                      name="paisNacimiento"
                      label="*País"
                      options={countries}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="nacionalidadRepresentante"
                      label="*Nacionalidad"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="curpRepresentante" label="*CURP" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="rfcRepresentante" label="*RFC" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="domicilioRepresentante"
                      label="*Domicilio"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Select
                      name="estadoCivil"
                      label="Estado Civil"
                      options={estadoCivil}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="emailRepresentante" label="*Email" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="telefonoRepresentante" label="*Télefono" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>*Subir INE</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Input type="file" name="ine" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>*Cuenta Bancaria</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="cuentaBancaria" label="*Cuenta Bancaria" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="banco" label="*Banco" />
                  </Grid>
                  <Grid item xs={12}>
                    <Checkbox
                      name="terminosCondiciones"
                      label="*Terminos y Condiciones"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button>Enviar</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
