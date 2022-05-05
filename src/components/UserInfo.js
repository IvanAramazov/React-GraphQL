import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

function UserInfo() {
    const [state, setState] = React.useState({
        firstName: "",    
        lastName: "",
        displayName: "",
        email: ""
      })  

    // function onChangeHandler(evt) {
    // const value = evt.target.value;
    // setState({
    //     ...state,
    //     [evt.target.name]: value
    // });
    // }

    const getUserInfoQuery = gql`
    query user($userId: String){
      user(id: $userId) {
        ... on User {
          id
          email
          info {
            firstName
            lastName
            displayName
            role
          }
        }
        ... on Error {
          errorType
          message
        }
      }
    }`;

    const editUserInfoMutation = gql`
    mutation addUserInfo($firstName: String!, $lastName: String!, $displayName: String!, $userId: String!) {
        editUserInfo(
          userId: $userId
          firstName: $firstName
          lastName: $lastName
          displayName: $displayName
        ) {
          ... on User {
            email
            info {
              firstName
              lastName
              displayName
              role
            }
          }
          ... on Error {
            message
            errorType
          }
        }
      }`

    const { loading, error, data } = useQuery(getUserInfoQuery, {
        variables: {
            userId: localStorage.getItem('userId') || ''
        },
    });
    const [updateUserInfo, {mutationData}] = useMutation(editUserInfoMutation,{
        variables:{
            userId: localStorage.getItem('userId') || '',
        }
    })

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    // if (data){
    //     state.displayName = data.user.info.displayName
    //     state.firstName = data.user.info.firstName
    //     state.lastName = data.user.info.lastName
    // }

    return (
        <div>
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Profile</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">User Profile</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            <div className="row">
                <div className="card card-primary card-outline col-md-3">
                    <div className="card-body box-profile">
                        <h3 className="profile-username text-center">{data.user.info.displayName}</h3>
                        <ul className="list-group list-group-unbordered mb-3">
                            <li className="list-group-item">
                                <b>First Name</b> <p className="float-right">{data.user.info.firstName}</p>
                            </li>
                            <li className="list-group-item">
                                <b>Last Name</b> <p className="float-right">{data.user.info.lastName}</p>
                            </li>
                            <li className="list-group-item">
                                <b>Email</b> <p className="float-right">{data.user.email}</p>
                            </li>
                            <li className="list-group-item">
                                <b>Role</b> <p className="float-right">{data.user.info.role}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-9">
                    <div className="card">
                        <div className="card-header p-2">
                            <ul className="nav nav-pills">
                                <li className="nav-item"><a className="nav-link active" href="#settings" data-toggle="tab">Settings</a></li>
                            </ul>
                        </div>{/* /.card-header */}
                        <div className="card-body">
                            <div className="tab-content">
                                {/* /.tab-pane */}
                                <div className="active tab-pane" id="settings">
                                    <form className="form-horizontal">
                                        <div className="form-group row">
                                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Display Name</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" name="displayName" id="inputDisplayName" placeholder="Display Name" value={state.displayName} onChange={(e) => setState({...state, displayName: e.target.value})}/>
                                            </div>
                                        </div>
                                         <div className="form-group row">
                                            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" id="inputEmail" placeholder="Email"  onChange={(e) => setState({...state, email: e.target.value})}/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputName2" className="col-sm-2 col-form-label">First Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" name="firstName" id="inputFirstName" placeholder="First Name" value={state.firstName} onChange={(e) => setState({...state, firstName: e.target.value})}/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputName2" className="col-sm-2 col-form-label">Last Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" name="lastName" id="inputLastName" placeholder="Last Name" value={state.lastName} onChange={(e) => setState({...state, lastName: e.target.value})}/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="offset-sm-2 col-sm-10">
                                                <button type="submit" className="btn btn-danger">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* /.tab-pane */}
                            </div>
                            {/* /.tab-content */}
                        </div>{/* /.card-body */}
                    </div>
                    {/* /.card */}
                </div>
            </div>





        </div>
    );
}

export default UserInfo;