import React from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { InputGroup } from './InputGroup';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { recoverPassword } from '../Store/Actions/authActions';

export const RecoverPassword = () => {

    const dispatch = useDispatch();
    const RecoverLoader = useSelector(state => state.RecoverLoader);

    const schema = Yup.object({
        email: Yup.string().required().default(''),
        newPassword: Yup.string().required().min(5, 'to short!').default(''),
        confimPassword: Yup.string().required().default('')
    })
    const formik = useFormik({
        initialValues: schema.getDefault(),
        onSubmit: ( values ) =>{

            if (values.newPassword !== values.confimPassword) {
                
                Swal.fire('Ups, it seems passwords does not match!');

            } else {

                dispatch(recoverPassword(values, formik.handleReset));

            }
        },
        validationSchema: schema
    })

    return (
      <>
        {/* Button trigger modal */}
        <button type="button" className="btn btn-link" data-toggle="modal" data-target="#exampleModal">
            forgot your password?
        </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Recover your password</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Hey!</h4>
                        <p>this is a simple recover password screen, so if you forgot it just typing the email and see your inbox</p>
                        </div>

                       <form  onSubmit={formik.handleSubmit} >

                        <div className="for-row">
                                <InputGroup 
                                    labelTex="Typing your email"
                                    InnputType="text"
                                    name="email"
                                    value={formik.values.email}
                                    OnChange={ formik.handleChange }
                                    isInvalid={ formik.touched.email && Boolean(formik.errors.email) }
                                />
                            <small>{ formik.touched.password && formik.errors.password }</small>
                           </div>
                           <div className="for-row">
                                <InputGroup 
                                    labelTex="New password!"
                                    InnputType="password"
                                    name="newPassword"
                                    value={formik.values.newPassword}
                                    OnChange={ formik.handleChange }
                                    isInvalid={ formik.touched.newPassword && Boolean(formik.errors.newPassword) }
                                />
                           </div>

                           <div className="for-row">
                                <InputGroup 
                                    labelTex="Again!"
                                    InnputType="password"
                                    name="confimPassword"
                                    value={formik.values.confimPassword}
                                    OnChange={ formik.handleChange }
                                    isInvalid={ formik.touched.confimPassword && Boolean(formik.errors.confimPassword) }
                                />
                           </div>

                           <button type="submit" className="btn btn-primary">
                               {
                                   (RecoverLoader)
                                   ?
                                    <i className="fa fa-refresh fa-spin"></i>   
                                   :
                                   'Recover it!'
                               }
                           </button>

                       </form>

                    </div>
                </div>
            </div>
        </div>
    </>

    )
}
