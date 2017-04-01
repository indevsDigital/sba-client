<template>
<div class="tile is-ancestor">
  <div class="tile is-parent column is-half is-offset-one-quarter">
    <div class="tile is-child box">
      <h1 class="title">{{product.id ? 'Edit' : 'Add New'}} product Details </h1>
      <div class="field">
        <label class="label">Product Name</label>
        <p class="control">
          <input class="input" type="text"  placeholder="product name" v-model="product.product_name">
        </p>
      </div>
      <div class="field">
        <label class="label">Product Code</label>
        <p class="control">
          <input class="input" type="text" placeholder="product code"  v-model="product.product_code">
        </p>
      </div>
      <div class="field">
        <label class="label">Product Category</label>
        <p class="control">
    <span class="select">
      <select v-model="product.product_category">
        <option v-for="category in categories"  v-bind:value="category.id">{{category.name}}</option>
      </select>
    </span>
        </p>
      </div>
      <div class="field">
        <label class="label">Product Unit Price</label>
        <p class="control">
          <input class="input" type="number" placeholder="product unit price" v-model="product.unit_price">
        </p>
      </div>
      <div class="field">
        <label class="label">Product Purchase Date</label>
        <p class="control">
          <input class="input" type="date" placeholder="product purchase date" v-model="product.purchase_date">
        </p>
      </div>
      <div class="field">
        <label class="label">Total Intial Units</label>
        <p class="control">
          <input class="input" type="number" placeholder="Initial units" v-model="product.total_inital_units">
        </p>
      </div>
      <div class="field">
        <label class="label">Product Expiry</label>
        <p class="control">
          <input class="input" type="date" placeholder="Expires on" v-model="product.expires_on">
        </p>
      </div>
      <div class="field">
        <label class="label">Available Units</label>
        <p class="control">
          <input class="input" type="number" placeholder="Available units" v-model="product.available_units">
        </p>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <p class="control">
          <textarea class="textarea" placeholder="Describe your product here" v-model="product.description"></textarea>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-primary" @click="onSubmit()">Submit</button>
          <button class="button is-danger" @click="onCancel()">Cancel</button>
        </p>
      </div>
    </div>
  </div>
</div>
</template>
<script src="./script.js"></script>
