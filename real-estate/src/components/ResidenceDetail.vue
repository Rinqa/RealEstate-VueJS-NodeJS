<template>
  <div class="container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11772.753146868687!2d21.46337265!3d42.466284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354f3db96b3fb6d%3A0xdb1a8e8d37da3019!2sAgmia%20Center!5e0!3m2!1sen!2s!4v1646156805530!5m2!1sen!2s"
      width="100%"
      height="250"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>

    <div class="row">
      <div class="col-md-6">
        <img src="../assets/Images/home.jpeg" width="450" height="600px" />
      </div>
      <div class="col-md-6">
        <h4>
          <i class="fa fa-bed" aria-hidden="true"></i> 4

          <i class="fa fa-bath" aria-hidden="true"></i> 4

          <i class="fa fa-home" arial-hidden="ture"></i> 500m²

          <i class="fa fa-tree" arial-hidden="ture"></i> 1500m²
          <i class="fa fa-credit-card" aria-hidden="true"></i> 120€/m²
        </h4>
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">Agent:</th>
              <td>Rinor Biçku</td>
            </tr>
            <tr>
              <th scope="row">Price:</th>
              <td>120 Є</td>
            </tr>
            <tr>
              <th scope="row">Option:</th>
              <td>Rent</td>
            </tr>

            <tr>
              <th scope="row">Garage:</th>
              <td>True</td>
            </tr>

            <tr>
              <th scope="row">City:</th>
              <td>Prishtina</td>
            </tr>
            <tr>
              <th scope="row">Location:</th>
              <td>St bekim femiu</td>
            </tr>

            <tr>
              <th scope="row">City Distance:</th>
              <td>500m</td>
            </tr>
            <tr>
              <th scope="row">Description:</th>
              <td>
                Shtëpia me sipërfaqe prej 227m² ndodhet në Lagjen Hana. Është në
                fazën finale të përfundimit dhe gjendet në një lokacion të qetë
                me pamje të hapur dhe me ndriçim natyral. Gjithashtu ka sistem
                të ngrohjes me energji elektrike.
                Ballkone
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: "last_name",
          sortable: true,
        },
        {
          key: "first_name",
          sortable: false,
        },
        {
          key: "age",
          label: "Person age",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
          variant: "danger",
        },
      ],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
};
</script>
