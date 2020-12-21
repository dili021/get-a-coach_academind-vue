<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname">First Name</label>
      <input
        @blur="clearValidation('firstName')"
        type="text"
        v-model.trim="firstName.val"
        name="firstname"
        id="firstname"
      />
      <p v-if="!firstName.isValid">Please enter a first name.</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname">Last Name</label>
      <input
        @blur="clearValidation('lastName')"
        type="text"
        v-model.trim="lastName.val"
        name="lastname"
        id="firstname"
      />
      <p v-if="!lastName.isValid">Please enter a last name.</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        @blur="clearValidation('description')"
        v-model.trim="description.val"
        name="description"
        id="description"
        cols="30"
        rows="10"
      ></textarea>
      <p v-if="!description.isValid">
        Please add a short description of your services.
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        @blur="clearValidation('rate')"
        type="number"
        v-model.number="rate.val"
        name="rate"
        id="rate"
      />
      <p v-if="!rate.isValid">Please add your hourly rate.</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          @blur="clearValidation('areas')"
          type="checkbox"
          v-model="areas.val"
          name="frontend"
          value="frontend"
          id="frontend"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          @blur="clearValidation('areas')"
          type="checkbox"
          v-model="areas.val"
          name="backend"
          value="backend"
          id="backend"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          @blur="clearValidation('areas')"
          type="checkbox"
          v-model="areas.val"
          name="career"
          value="career"
          id="career"
        />
        <label for="career">Career Development</label>
      </div>
      <p v-if="!areas.isValid">Please choose at least 1 area of expertise.</p>
    </div>
    <p v-if="!formIsValid">
      Please fix the above errors
    </p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      rate: {
        val: null,
        isValid: true
      },
      areas: {
        val: [],
        isValid: true
      },
      formIsValid: true
    };
  },
  emits: ['save-data'],
  methods: {
    clearValidation(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (!this.firstName.val) {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (!this.lastName.val) {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (!this.description.val) {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (!this.areas.val.length) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
      return this.formIsValid;
    },
    submitForm() {
      if (!this.validateForm()) return;
      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val
      };
      this.$emit('save-data', formData);
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
