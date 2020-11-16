<template>
<div class="content bg-transparent">
    <div class="container-fluid">

            <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
        <div class="row">
            <div class="col-md-6">
                <p class=" ml-3"> {{ $t('attributes.name') }}
                <!--  adding modal -->
                <add-modal-component v-if="isPermitted('create','attribute')"></add-modal-component> </p>
                <div class="">
                    <ShowAllData v-if="isPermitted('view','attribute')"></ShowAllData>
                </div>
                <!-- edit Modal -->
                <edit-modal-component v-if="isPermitted('update','attribute')"></edit-modal-component>

            </div>
            <div class="col-md-6">
                <p class=" ml-3"> {{ $t('attributes.name') }}
                <!--  adding modal -->
                <createSubAttribute v-if="isPermitted('create','attribute')"></createSubAttribute> </p>
                <div class="">
                    <showSubAttributes v-if="isPermitted('view','attribute')"></showSubAttributes>
                </div>
                <!-- edit Modal -->
                <editSubAttribute v-if="isPermitted('update','attribute')"></editSubAttribute>
                </div>
            </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import addModalComponent from "../component/addModalComponent"
import editModalComponent from "../component/editModalComponent"
import ShowAllData from '../component/ShowAllData';

import createSubAttribute from "../component/values/createSubAttribute"
import editSubAttribute from "../component/values/editSubAttribute"
import showSubAttributes from '../component/values/showSubAttributes.vue';

export default {
    components:{
        addModalComponent,editModalComponent ,ShowAllData,createSubAttribute, showSubAttributes,editSubAttribute
    },
    created(){
        document.title = 'Attributes'
    }
}
</script>

