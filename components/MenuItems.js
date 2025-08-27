import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, Image, TouchableOpacity } from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00', image: require('../assets/hummus.jpeg')},
      { name: 'Moutabal', price: '$5.00', image: require('../assets/moutabal.jpeg') },
      { name: 'Falafel', price: '$7.50' ,image: require('../assets/falafel.jpg')},
      { name: 'Marinated Olives', price: '$5.00', image: require('../assets/MarinatedOlives.jpeg')},
      { name: 'Kofta', price: '$5.00' ,image: require('../assets/kofta.jpg')},
      { name: 'Eggplant Salad', price: '$8.50' ,image: require('../assets/eggplant-salad.jpg')},
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' ,image: require('../assets/lentilburger.jpeg')},
      { name: 'Smoked Salmon', price: '$14.00', image: require('../assets/salmon.jpeg') },
      { name: 'Kofta Burger', price: '$11.00' ,image: require('../assets/koftaburger.jpeg')},
      { name: 'Turkish Kebab', price: '$15.50', image: require('../assets/kebab.jpeg')},
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00' },
      { name: 'Buttered Rice', price: '$3.00' ,image: require('../assets/butterrice.jpeg')},
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00', image: require('../assets/baklava.jpeg') },
      { name: 'Tartufo', price: '$3.00'},
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Item = ({ name, price, image }) => (
  <View style={menuStyles.itemContainer}>
    {image && <Image source={image} style={menuStyles.itemImage} />}
    <View style={{ marginLeft: image ? 10 : 0, flex: 1 }}>
      <Text style={menuStyles.itemName}>{name}</Text>
      <Text style={menuStyles.itemPrice}>{price}</Text>
    </View>
  </View>
);

const MenuItems = () => {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (title) => {
    setExpandedSections((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const renderItem = ({ item, section }) => {
    if (!expandedSections.includes(section.title)) return null;
    return <Item name={item.name} price={item.price} image={item.image} />;
  };

  const renderSectionHeader = ({ section: { title } }) => (
    <TouchableOpacity onPress={() => toggleSection(title)}>
      <View style={menuStyles.headerStyle}>
        <Text style={menuStyles.sectionHeader}>
          {expandedSections.includes(title) ? '▼' : '►'} {title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: { flex: 0.8 },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
  },
  itemName: { fontSize: 18, fontWeight: "500" },
  itemPrice: { fontSize: 16, color: "#8d0e0eff" },
  headerStyle: { backgroundColor: '#F4CE14', padding: 10 },
  sectionHeader: { color: 'black', fontSize: 20 },
  itemImage: { width: 60, height: 60, borderRadius: 6 },
});

export default MenuItems;
