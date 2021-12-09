<template>
<div translate="bn" type="primary">
    <Row>
        <Col span="5" class="mr-2">
            <form class="form-inline ml-3 mb-4" @submit.prevent="getResult">
                <div class="input-group input-group-sm">
                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" v-model="defaultFilter.q" >
                <div class="input-group-append">
                    <button class="btn btn-navbar" type="submit">
                    <i class="fas fa-search"></i>
                    </button>
                </div>
                </div>
            </form>
        </Col>
        <Col span="5" class="mr-2">
            <i-select v-model="defaultFilter.orderBy" style="width:200px">
                <i-option v-for="item in orderList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
            </i-select>
        </Col>
        <Col span="5" class="mr-2">
            <Select v-model="defaultFilter.sortBy" >
                  <Option v-for="(sort,i)  in SortList" :key="i" :value="sort.value"> {{ sort.label }} </Option>
            </Select>
        </Col>
        <Col span="5" class="mr-2">
            <Select v-model="defaultFilter.perPage">
                  <Option v-for="(per,i)  in perPageList" :key="i" :value="per.value"> {{ per.label }} </Option>
            </Select>
        </Col>
        <Col span="3">
            <Button type="primary" @click="getResult" icon="ios-settings"> {{ $t('filter.name') }} </Button>
        </Col>
    </Row>
</div>
</template>
<script>
export default {
    name : "FilterData" ,
    props:{
        defaultFilter: [Object,Function],
        getResult: [Function]
    },
    data(){
        return {
            perPageList : [
                        {
                            label : "10  Per Page" ,
                            value : 10
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
    }
}
</script>
