function converter(Aaron){
    let output = [];
        for(let i in Aaron){
            let result1= {name: i + '', rate: Aaron[i] };
            output.push(result1);
        }
        return output;
        text

    }

new Vue({
    el: '#app',
    template: `<div :style="container">
                    <div id='floatingDiv'>
                        <div id="floatingDivDate">{{date}}</div>
                    </div>

                    <h1 :style="h1">ADEBAYO-Fx</h1>
       
                    <p>The Exchange rates listed here are against Euro (€)</p>  
                    
                    <table :style="tableHeader">
                        <th :style="tdLeft">
                            CURRENCY
                        </th>
                        <th :style="td">
                            RATE
                        </th>
                    </table>
                    
                    <div v-for="rate in data" :style="style" >
                        <table :style="table">
                            <td :style="tdLeft">
                                {{rate.name}}
                            </td>
                            <td :style="td">
                                {{rate.rate}}
                            </td>
                        </table>
                    </div>

                </div>`,
    data () {
      return {
        info: null,
        data: [

        ],
        date: '',
        container:{
            backgroundColor: 'black',
            color: "white",
            margin: "auto",
            width: "1250px"
        },
        style:{
            margin: "auto",
            width: "500px"
        },
        tdLeft: {
            borderRight: '4px solid purple',
            width: "150px"
        },
        tdRight: { 
            width: "250px"

        },
        table: {
          border: '1px solid white',
          width: "500px"

        },
        tableHeader: {
            border: '1px solid white',
            width: "500px",
            marginLeft: "375px"
  
          }
      }
    },
    mounted () {
      axios
        .get('https://api.exchangeratesapi.io/latest')
        .then(response =>{
            console.log(response.data.rates);
            console.log(Object.keys(response.data.rates));
            console.log(Object.values(response.data.rates));
            this.data = converter(response.data.rates);
            this.date=response.data.date
            
        } )
        
    }
  })

