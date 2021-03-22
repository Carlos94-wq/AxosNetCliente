
import React from 'react';
import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
//componentes
import { InputGroup } from '../../Components/InputGroup';
import { RecoverPassword } from '../../Components/RecoverPassword';
import { StartLogin } from '../../Store/Actions/authActions';

export const AuthForm = () => {

    const AuthLoader = useSelector(state => state.AuthLoader);
    const dispatch = useDispatch();

    const schema = Yup.object({
        email: Yup.string().required().default(''),
        password: Yup.string().required().min(5).max(10).default('')
    })
    const formik = useFormik({
        initialValues: schema.getDefault(),
        onSubmit:(values)=>{
            dispatch( StartLogin(values) );
        },
        validationSchema: schema
    })

    return (
    <>
        <form onSubmit={ formik.handleSubmit } 
              style={{ width:'500px' }}
              className="card shadow p-3 mb-5 bg-white rounded"
        >
            <div className="card-header header-card">
                <p className="card-title">Sign In</p>
            </div>
            <div className="card-body">

                {/*
                    para que InputGroup funcione se vea bien necesita estar dentro de una fila,
                    recibe varias props como el tamanio de la columna, el valor, el texto, la funcion onchange y una propiedad 
                    bool que me a ayudar a saber si es valido o no
                */}

                <div className="form-row">
                    <InputGroup
                        colSize={ 12 }
                        InnputType="text"
                        labelTex="Email"
                        value={ formik.values.email }
                        OnChange={ formik.handleChange }
                        name="email"
                        isInvalid={ formik.touched.email && (Boolean(formik.errors.email)) }
                    />
                </div>

                <div className="form-row">
                    <InputGroup 
                        colSize={ 12 }
                        InnputType="password"
                        labelTex="Password"
                        value={ formik.values.password }
                        OnChange={ formik.handleChange }
                        name="password"
                        isInvalid={ formik.touched.password && (Boolean(formik.errors.password))  }
                    />
                </div>

                <div className="form-row">
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">Remember password</label>
                    </div>
                </div>

                <button class="btn-block btn btn-custom" type="submit">
                    {
                        (AuthLoader) 
                        ? <i className="fa fa-refresh fa-spin"></i>
                        : 'SingIn'
                    }
                </button>
            </div>

            <div className="card-footer d-flex justify-content-between">
                <Link to="/Register">
                    SignUp
                </Link>
            </div>
        </form>
        <RecoverPassword />
    </>
    )
}