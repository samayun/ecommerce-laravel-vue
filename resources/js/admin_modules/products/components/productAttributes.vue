<template>
    <div>
        <div class="tile">
            <h3 class="tile-title">Attributes</h3>

            <div class="tile-body">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="parent">Select an Attribute <span class="m-l-5 text-danger"> *</span></label>
                            <select id=parent class="form-control custom-select mt-15" v-model="attribute" @change="selectAttribute(attribute)"
                            >
                             <option :value="attribute" v-for="attribute in attributes" :key="attribute.id"> {{ attribute.name }} </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tile" v-if="attributeSelected">
            <h3 class="tile-title">Add Attributes To Product</h3>
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="values">Select an value <span class="m-l-5 text-danger"> *</span></label>
                        <select id=values class="form-control custom-select mt-15" v-model="value"
                        @change="selectValue(value)">
                            <option v-for="value in attribute.values" :key="value.id" :value="value.id" > {{ value.name }} </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row" v-if="valueSelected">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label" for="quantity">Quantity</label>
                        <input class="form-control" type="number" id="quantity" v-model="currentQty"/>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label" for="price">Price</label>
                        <input class="form-control" type="text" id="price" v-model="currentPrice"/>
                        <small class="text-danger">This price will be added to the main price of product on frontend.</small>
                    </div>
                </div>
                <div class="col-md-12">
                    <button class="btn btn-sm btn-primary" @click="addProductAttribute()">
                        <i class="fa fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
        <div class="tile">
            <h3 class="tile-title">Product Attributes</h3>
            <div class="tile-body">
                <div class="table-responsive">
                    <table class="table table-sm">
                        <thead>
                        <tr class="text-center">
                            <th>Attribute ID</th>
                            <th>Attribute Type</th>
                            <th>Value</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(pa,i) in editProductData.attributes" :key="i">
                            <td style="width: 25%" class="text-center">{{ pa.id}}</td>
                            <td style="width: 25%" class="text-center">{{ pa.type.name}}</td>
                            <td style="width: 25%" class="text-center">{{ pa.name}}</td>
                            <td style="width: 25%" class="text-center">{{ pa.quantity}}</td>
                            <td style="width: 25%" class="text-center">{{ pa.price}}</td>
                            <td style="width: 25%" class="text-center">
                                <button class="btn btn-sm btn-danger" @click="deleteIfPermitted(pa)">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
    export default {
        name: "product-attributes",
        props: ['productid'],
        data() {
            return {
                attribute: {},
                attributeSelected: false,
                attributeValues: [],
                value: {},
                valueSelected: false,
                currentAttributeId: '',
                currentValue: '',
                currentQty: '',
                currentPrice: '',
            }
        },
        created: function() {
            if (this.getAllAttribute.length == 0) {
             this.getAttributes();
        }
        },
        computed:{
             ...mapState("productsStoreIndex", ['editProductData']),
             ...mapState("attributesStoreIndex", ['attributes']),
              ...mapGetters("attributesStoreIndex",['getAllAttribute','getAllValue' ])
        },
        methods: {
            ...mapActions("attributesStoreIndex",['getAttributes' ]),
            ...mapMutations("productsStoreIndex",['CREATE_PRODUCT_ATTRIBUTE' ]),

            selectAttribute(attribute) {
                let _this = this;
                this.currentAttributeId = attribute.id;
                 _this.attributeValues = attribute.values;
                this.attributeSelected = true;
            },
            selectValue(value) {
                this.valueSelected = true;
                this.currentValue = value.name;
                this.currentQty = value.quantity;
                this.currentPrice = value.price;
            },
            addProductAttribute() {
                if (this.currentQty == undefined || this.currentPrice == undefined) {
                    this.$Notice.info({
                        title:"Error, Some values are missing.",
                        desc: "Enter Quantity Or Price"
                    });
                } else {
                    let _this = this;
                    axios.post('/api/admin/product/attributes', {
                        attribute_id: this.value,
                        quantity: this.currentQty,
                        price: this.currentPrice,
                        product_id: this.productid,
                    }).then (function(response){
                        _this.$Notice.success({
                            title : "Success! Product Attribute Successfully"
                        });
                        _this.editProductData.attributes.unshift(response.data)
                        // _this.currentValue = '';
                        _this.currentQty = '';
                        _this.currentPrice = '';
                        _this.valueSelected = false;
                    }).catch(function (error) {
                        console.log(error);
                    });
                    // this.loadProductAttributes(this.productid);
                }
            },
            deleteIfPermitted(productAttribute) {
                let _this = this;
                 this.$Modal.confirm({
                    title: '<Icon type="ios-information-circle"></Icon> Are you sure to delete',
                    content: "Click OK to proceed",
                    onOk: () => {
                       _this.deleteProductAttribute(productAttribute)
                    }
             })

            },
            deleteProductAttribute(productAttribute){
                let _this = this;
                axios.delete(`/api/admin/product/attributes/${productAttribute.id}`).then (function(response){
                    if (response.status === 200) {
                          _this.$Notice.success({
                            title : "Success! Product attribute has been deleted!"
                        });
                       _this.editProductData.attributes =  _this.editProductData.attributes.filter(i => productAttribute.id != i.id);
                    } else {
                        _this.$Notice.error({title: "Your Product attribute not deleted!" });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>
