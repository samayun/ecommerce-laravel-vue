<template>
<Card>
    <Row>
        <Col span="5" class="mr-2">
            <form class="form-inline ml-3 mb-4" @submit.prevent="getFilterResult">
                <div class="input-group input-group-sm">
                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" v-model="filterString.q" >
                <div class="input-group-append">
                    <button class="btn btn-navbar" type="submit">
                    <i class="fas fa-search"></i>
                    </button>
                </div>
                </div>
            </form>
        </Col>
        <Col span="5" class="mr-2">
            <i-select v-model="filterString.orderBy" style="width:200px">
                <i-option v-for="item in orderList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
            </i-select>
        </Col>
        <Col span="5" class="mr-2">
            <Select v-model="filterString.sortBy" >
                  <Option v-for="(sort,i)  in SortList" :key="i" :value="sort.value"> {{ sort.label }} </Option>
            </Select>
        </Col>
        <Col span="5" class="mr-2">
            <Select v-model="filterString.perPage">
                  <Option v-for="(per,i)  in perPageList" :key="i" :value="per.value"> {{ per.label }} </Option>
            </Select>
        </Col>
        <Col span="3">
            <Button type="default" @click="getFilterResult" icon="ios-settings"> Filter </Button>
        </Col>
    </Row>
</Card>
</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
    name : "FilterData" ,
    data(){
        return {
            perPageList : [{
                            label : "5 Per Page" ,
                            value : 5
                        },
                        {
                            label : "10  Per Page" ,
                            value : 20
                        },
                        {
                            label : "20  Per Page" ,
                            value : 20
                        },
                        {
                            label : "30  Per Page" ,
                            value : 30
                        },
                        {
                            label : "40  Per Page" ,
                            value : 40
                        },
                        {
                            label : "50  Per Page" ,
                            value : 50
                        },
                        {
                            label : "80  Per Page" ,
                            value : 80
                        },
                        {
                            label : "100  Per Page" ,
                            value : 100
                        },
                        {
                            label : "200  Per Page" ,
                            value : 200
                         }],
            orderList : [{ label : "ID" ,value : "id" },
                        {label : "Name" ,value : "name" },
                        { label : "Date" ,value : "created_at"}],
            SortList : [{
                            label : "Ascending" ,
                            value : "asc"
                        },
                        {
                            label : "Descending" ,
                            value : "desc"
                        }]
        }
    },
    computed: {
       ...mapGetters("categoriesStoreIndex",['filterString' ])
    },
    methods:{
        ...mapActions("categoriesStoreIndex", ['getCategories']),
        getFilterResult(){
            this.getCategories()

        }
    }

}
</script>
