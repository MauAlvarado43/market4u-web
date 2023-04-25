import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { Route } from "seed/helpers"
import { ScriptTag } from "seed/helpers";
import Nav from "components/nav/Nav";
import Main from "components/main/Main";
import Profile from "components/profile/Profile";
import Sales from "components/sales/Sales";
import Products from "components/products/Products";
import History from "components/history/History";

import { Formik, Form, Field } from 'formik';

const HomeView = () =>
  <div>
    <Nav />

    <main id="content" role="main" class="main">

      <div class="row">
        <div class="col-md-4">
          <Formik
            initialValues={{}}
            onSubmit={() => { }}>
            {({ values, setFieldValues }) =>
              <Form>
                {/* Key */}
                <div class="mb-3 mt-5">
                  <div class="form-group">
                    <label className="input">
                      <Field type="text" name="key" className="form-control input__field" placeholder=" " required  />
                      <span class="input__label">
                        Clave <span className='text-danger fw-bold'>*</span>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Description */}
                <div class="mb-3">
                  <div class="form-group">
                    <label class="input">
                      <Field type="text" name="description" class="form-control input__field" placeholder=" " required value={values.description || ''} />
                      <span class="input__label">
                        Descripción <span className='text-danger fw-bold'>*</span>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Abbreviation */}
                <div class="mb-3">
                  <div class="form-group">
                    <label class="input">
                      <Field type="text" name="abbreviation" class="form-control input__field" placeholder=" " required value={values.abbreviation || ''} />
                      <span class="input__label">
                        Abreviación <span className='text-danger fw-bold'>*</span>
                      </span>
                    </label>
                  </div>
                </div>

                <div class="pt-3">
                  <button type="submit" class="btn btn-primary">
                    <i class="bi bi-plus" style={{ marginRight: "10px" }}></i>
                    Editar 
                  </button>

                  <button type="button" class="btn btn-danger" style={{ marginLeft: "20px" }}>
                    <i class="bi bi-x" style={{ marginRight: "10px" }}></i>
                    Cancelar
                  </button>
                </div>

              </Form>
            }</Formik>
        </div>
      </div>



      <Switch>
        <Route path="/home" component={Main} />
        <Route path="/profile" component={Profile} />
        <Route path="/sales" component={Sales} />
        <Route path="/products" component={Products} />
        <Route path="/history" component={History} />
        <Redirect to="/home" />
      </Switch>

    </main>

    <ScriptTag content={`
         // Builder toggle invoker
        $('.js-navbar-vertical-aside-toggle-invoker').click(function () {
          $('.js-navbar-vertical-aside-toggle-invoker i').tooltip('hide');
        });

        // Initialization of navbar vertical navigation
        var sidebar = $('.js-navbar-vertical-aside').hsSideNav();

        // Initialization of tooltip in navbar vertical menu
        $('.js-nav-tooltip-link').tooltip({ boundary: 'window' })

        $(".js-nav-tooltip-link").on("show.bs.tooltip", function(e) {
          if (!$("body").hasClass("navbar-vertical-aside-mini-mode")) {
            return false;
          }
        });

        // Initialization of unfold
        $('.js-hs-unfold-invoker').each(function () {
          var unfold = new HSUnfold($(this)).init();
        });

        // Initialization of form search
        $('.js-form-search').each(function () {
          new HSFormSearch($(this)).init()
        });
    `} />
  </div>;

HomeView.propTypes = {};

export default HomeView;