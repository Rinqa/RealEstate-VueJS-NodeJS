<template>
  <div>
    <iframe
      width="100%"
      height="250"
      style="border: 0"
      loading="lazy"
    ></iframe>
    
      <b-row>
        <b-col>
          <img src="../assets/Images/agent.png">
        </b-col>
        <b-col style="margin-right: 150px">
           <b-table striped hover :items="items" :fields="fields"></b-table>
        </b-col>
      </b-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [
          {
            key: 'first_name',
            sortable: false
          },
          {
            key: 'age',
            label: 'Person age',
            sortable: false,
            // Variant applies to the whole column, including the header and footer
            variant: 'danger'
          }
        ],
        items: [
          { isActive: true, age: 40, first_name: 'Dion Dickerson' },
          { isActive: false, age: 21, first_name: 'Albin Dickerson' },
          { isActive: false, age: 89, first_name: 'Geneva Wilson' },
          { isActive: true, age: 38, first_name: 'Albin Dickerson' }
        ]
      }
    }
  }
</script>
