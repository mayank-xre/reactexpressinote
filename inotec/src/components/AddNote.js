import React from "react";
import { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

export default function AddNote(props) {
  const context = useContext(noteContext);
  const addnote = context.addnote;
  const addNoteform = (e) => {
    e.preventDefault();
    addnote(
      document.getElementById("title").value,
      document.getElementById("desc").value,
      document.getElementById("topic").value
    );
      props.alert("Added Successfully","success")
  };
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    "use strict";
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if(!(document.getElementById("title").value==="" && document.getElementById("desc").value==="" && document.getElementById("desc").value==="")){
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
        }
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
  return (
    <div>
      <form className="my-3 needs-validation" onSubmit={addNoteform} noValidate>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            required
            minLength={5}
          />
          <div className="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Atleast Five characters Needed</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            required
            minLength={5}
          />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Atleast Five characters Needed</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Topic
          </label>
          <input
            type="text"
            className="form-control"
            id="topic"
            required
            minLength={5}
          />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Atleast Five characters Needed</div>
        </div>
        <button type="submit" className="btn btn-dark">
          Add
        </button>
      </form>
    </div>
  );
}
