<template>
    <v-container>
        

        
    </v-container>
</template>

<script>
export default {
    created(){
        this.$axios.$post('api/admingoods').then((res) =>{
            return this.goods = res.goods
        })
    },
    data () {
      return {
          e1: '',
          title: '',
          text: '',
          image: '',
          category: '',
          created_at: '',
          goods: [],
        items: [
          { text: 'Видеокарты' , value: 2},
          { text: 'Процессоры', value: 3},
          { text: 'Мышь и клавиатура', value: 4},
          { text: 'Блоки питания', value: 5},
          { text: 'Мониторы', value: 6},
          { text: 'USB Накопители', value: 7},
          { text: 'Сетевые адаптеры', value: 8}
        ]
      }
    },
    methods: {
        add: function(){
            return this.$axios.$post('api/addgood',{
                title: this.title,
                text: this.text,
                isPopular: this.e1,
                image: this.image,
                category: this.category,
                created_at: this.created_at
            }).then((res) =>{
                alert(res)
                location.reload()
            })
            
        },
        deleteItem: function(product){
            this.$axios.$post('api/deladmingood',{
                id: product.id
            }).then((res) =>{
                return res
            })
            var id = product.id
            this.goods.splice(id,1)
            location.reload()
        }
    }
}
</script>

<style lang="less">
    #text{
        border-bottom: 1px solid black;
    }

    .formadd{
        background-color: silver;
        border-radius: 10px;
        padding: 10px;
    }
    .god{
        max-width: 800px;
        margin-top: 20px;
        border-bottom: 1px solid silver;
        padding-bottom: 10px;
        .img{
            height: 150px;
            width: 150px;
        }
        .name{
            font-size: 18px;
            font-weight: 600;
            color: black;
            padding-right: 20px;
        }
        .desc{
            font-size: 14px;
            font-weight: 400;
            color: rgb(71, 71, 71);
            padding-right: 20px;
        }
        .price{
            font-size: 20px;
            color: red;
            font-weight: 600;
            padding: 10px;
        }
    }
</style>
