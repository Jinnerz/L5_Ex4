import React , {useState} from 'react';
import {View, SectionList, Image, Text, ScrollView, StyleSheet, Button} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    carContainer: {
        backgroundColor: 'lightblue',
        flexDirection: 'row',
    },
    titleContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    carTitleContainer: {
        padding: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'darkblue',

    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textDecorationLine: 'underline',
    }
})

// rather than using concatenation (does not work) in the link, put require directly and then pass into the render
const datasource = [
    {
        data: [
            {
                name: 'Veyron',
                link: require('./img/bugatti_veyron.png'),
                description: 'Costing $1.9m initially, now the Bugatti Veyron has special editions that some, even cost double the starting amount.'
            },
            {
                name: 'Bolide',
                link: require('./img/bugatti_bolide.jpg'),
                description: 'Costing $4.7m, the Bugatti Bolide is an ultra-light vehicle mastering extreme cornering speeds, yet manageable for all drivers.'
            }
        ],
        title: 'Bugatti'
    },
    {
        data: [
            {
                name: 'Agera',
                link: require('./img/koenigsegg_agera.jpg'),
                description: 'The Koenigsegg Agera was the first model to feature the Koenigsegg developed Vortex Generating Rims (VGR).'
            },
            {
                name: 'Jesko',
                link: require('./img/koenigsegg_jesko.jpg'),
                description: 'The Koenigsegg Jesko is a street-legal megacar that caters to very specific tastes. Ultimate in engine power and precision handling, it has a twin-turbo engine.'
            }
        ],
        title: 'Koenigsegg'
    }
];

const renderItem = ({item}) => {
    return(
        <View style={{borderWidth: 1, borderColor:'white'}}>
            <View style={styles.carContainer}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20}}>
                    <Text>{item.description}</Text>
                </View>

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10, borderLeftWidth: 0.5}}>
                    <Image source={item.link} style={{width: 150, height: 100}}/>
                </View>
            </View>

            {/*1st View to change padding and width of button, styles are not directly applied to the button, so setting up a box for button to change styling*/}
            {/*2nd View to change arrangement */}
            <View style={{alignItems: 'center'}}>
                <View style={{padding: 10, width: '70%'}}>
                    <Button title="Click here to Learn More!"/>
                </View>
            </View>

        </View>
    )
}

const App = () => {
  return (
      <ScrollView>
          <View style={{marginTop: 50, padding: 10, backgroundColor: 'black'}}>
              <View style={styles.titleContainer}>
                  <Icon style={{paddingRight: 10}} name="car" size={20} color="#00000" />
                  <Text>Welcome to my Car Enthusiast App!</Text>
                  <Icon style={{paddingLeft: 10}} name="car" size={20} color="#00000" />
              </View>

              <SectionList sections={datasource} renderItem={renderItem}  renderSectionHeader={({section: {title}}) => (
                  <View style={styles.carTitleContainer}>
                      <Text style={styles.title}>{title}</Text>
                  </View>

              )} />

          </View>
      </ScrollView>
  );
};

export default App;
