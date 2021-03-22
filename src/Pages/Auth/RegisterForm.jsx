import React from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { InputGroup } from '../../Components/InputGroup';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../Store/Actions/authActions';

export const RegisterForm = () => {

    const dispatch = useDispatch();
    const RegisterLoader = useSelector(state => state.RegisterLoader);

    const schema = Yup.object({
        userName: Yup.string().required().default(''),
        userLastName: Yup.string().required().default(''),
        userEmail: Yup.string().required().default(''),
        userPassword: Yup.string().required().min(5).max(10).default(''),
        confirmPassword: Yup.string().required().min(5).max(10).default('')
    })
    const formik = useFormik({
        initialValues: schema.getDefault(),
        onSubmit:(values)=>{
           
            if (values.userPassword !== values.confirmPassword) {

                Swal.fire('Ensure passwords does match');

            } else {

                dispatch(registerUser(values));

            }

        },
        validationSchema: schema
    })
    
    return (
    <form onSubmit={ formik.handleSubmit } 
        style={{ width:'500px' }}
        className="card shadow p-3 mb-5 bg-white rounded"
    >
        <div className="card-header header-card">
            <p className="card-title">Sign Up</p>
        </div>
        <div className="card-body">

            <div className="form-row">
                <InputGroup 
                    colSize={ 12 }
                    InnputType="text"
                    labelTex="Name"
                    value={ formik.values.userName }
                    OnChange={ formik.handleChange }
                    name="userName"
                    isInvalid={ formik.touched.userName && (Boolean(formik.errors.userName)) }
                />
            </div>

            <div className="form-row">
            <InputGroup 
                    colSize={ 12 }
                    InnputType="text"
                    labelTex="Last Name"
                    value={ formik.values.userLastName }
                    OnChange={ formik.handleChange }
                    name="userLastName"
                    isInvalid={ formik.touched.userLastName && (Boolean(formik.errors.userLastName)) }
                />
            </div>

            <div className="form-row">
                <InputGroup 
                    colSize={ 12 }
                    InnputType="text"
                    labelTex="Email"
                    value={ formik.values.userEmail }
                    OnChange={ formik.handleChange }
                    name="userEmail"
                    isInvalid={ formik.touched.userEmail && (Boolean(formik.errors.userEmail)) }
                />
            </div>

            <div className="form-row">
                <InputGroup
                    colSize={ 6 }
                    InnputType="password"
                    labelTex="Password"
                    value={ formik.values.userPassword }
                    OnChange={ formik.handleChange }
                    name="userPassword"
                    isInvalid={ formik.touched.userPassword && (Boolean(formik.errors.userPassword))  }
                />
                <InputGroup
                    colSize={ 6 }
                    InnputType="password"
                    labelTex="Password"
                    value={ formik.values.confirmPassword }
                    OnChange={ formik.handleChange }
                    name="confirmPassword"
                    isInvalid={ formik.touched.confirmPassword && (Boolean(formik.errors.confirmPassword))  }
                />
            </div>

            <button className="btn-block btn btn-custom" type="submit">
                {
                   ( RegisterLoader ) 
                   ?
                     <i className="fa fa-refresh fa-spin"></i>
                   : 
                    'SingIn'

                }
            </button>
        </div>
    </form>
    )
}
