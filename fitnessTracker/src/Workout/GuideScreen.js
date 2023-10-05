import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';
import React from 'react';
import yogas from '../consts/yogas';
import workouts from '../consts/workouts'; 
import extraactivities from '../consts/extraactivities';


const width = Dimensions.get('window').width / 2 - 30;

const GuideScreen = ({ navigation }) => {
  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['YOGA', 'WORKOUT', 'Extra_Activities']; //categories fields to navigate

  const dataByCategory = [yogas, workouts, extraactivities]; // Array of data for different categories

  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                styles.categoryText,
                categoryIndex === index && styles.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ yoga }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', yoga)}>
        <View style={styles.card}>
          <View style={{ height: 100, alignItems: 'center' }}>
            <Image source={yoga.image} style={{ flex: 1, resizeMode: 'contain' }} />
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10, color: '#00B761' }}>
            {yoga.name}
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#00B761' }}>
              Time: {yoga.time}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View>
        <View>
          <Text
            style={{ fontSize: 25, fontWeight: 'bold', color: '#00B761', margin: 10 }}>
            Start Your Activities & {'\n'} Be Healthy
          </Text>
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={dataByCategory[categoryIndex]} // Use data by selected category
        renderItem={({ item }) => {
          return <Card yoga={item} />;
        }}
      />
    </SafeAreaView>
  );
};


export default GuideScreen;


const styles = StyleSheet.create({
  header:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
    marginLeft:15,
    marginRight:15
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: '#00B761',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#00B761',
  },
  card: {
    height: 225,
    backgroundColor: '#f1f1f1',
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    marginLeft:15,
    marginRight:15
  },
});

// white: '#fff',
// dark: '#000',
// red: '#F52A2A',
// light: '#F1F1F1',
// '#00B761': '#00B761',