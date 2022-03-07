<template>
  <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11772.753146868687!2d21.46337265!3d42.466284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354f3db96b3fb6d%3A0xdb1a8e8d37da3019!2sAgmia%20Center!5e0!3m2!1sen!2s!4v1646156805530!5m2!1sen!2s"
      width="100%"
      height="250"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    
      <b-row>
        <b-col>
          <img src="../assets/Properties.png">
        </b-col>
        <b-col>
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
            key: 'last_name',
            sortable: true
          },
          {
            key: 'first_name',
            sortable: false
          },
          {
            key: 'age',
            label: 'Person age',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
            variant: 'danger'
          }
        ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>
