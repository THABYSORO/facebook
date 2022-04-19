import { StatusBar } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet,Image, Text,TouchableOpacity, View } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.mode}>
          <Text style={{color:'#fff',margin:10}}>Data Mode</Text>
          <Text style={styles.data}>Go to Text Only</Text>
        </View>
        <View style={styles.navigation}>
          <View style={styles.facebook}></View>
          <View style={styles.home}>
            <TouchableOpacity>
              <Octicons name="home" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="md-people-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="message1" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>  
            <TouchableOpacity>
               <MaterialIcons name="ondemand-video" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
               <AntDesign name="addusergroup" size={24} color="black" />

            </TouchableOpacity>

          </View>
        </View>
      </View>
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <Image style={styles.profilePic} source={require('./assets/babe.jpg')}/>
          <View style={styles.info}>
            <Text style={styles.names}>Soro Tours</Text>
            <Text style={styles.moneys}>sponsored</Text>
          </View>
          <Fontisto style={styles.more} name="more-v-a" size={20} color="black" />
        </View>
        <View style={styles.postText}>
          <Text>Do you like travelling? Capetown is the best destination ever!!!</Text>
        </View>
        <View style={styles.postpic}>
          <Image style={styles.pic} source={require('./assets/capetown.jpg')}/>
        </View>
        <View style={styles.postLike}>
          <Fontisto name="like" size={18} color="blue" />
          <Text style={styles.sharps}>14 likes</Text>
        </View>
        <View style={styles.postReactins}>
          <TouchableOpacity style={styles.buttons}>
            <Text>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text>comments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text>share</Text>
          </TouchableOpacity>
        </View>
      </View>
    
      <StatusBar style="auto"  />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  post:{
    width:'98%',
    padding:5,
    backgroundColor:'#EEEEEE',
    borderRadius:10,
  },
  postReactins:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between'
  },
  buttons:{
    backgroundColor:'#E0E0E0',
    borderRadius:30,
    paddingHorizontal:30,
    paddingVertical:10,
  },
  pic:{
    width:'100%',
    height:300,

  },
  postpic:{
    width:'100%',
  },
  postLike:{
    margin:5,
    flexDirection:'row',
    alignItems:'baseline'
  },
  profilePic:{
    height:50,
    width:50,
    borderRadius:40,
  },
  sharps:{
    marginLeft:5
  },
  postHeader:{
    flexDirection:'row',
    width:'100%'
  },
  info:{
    marginLeft:8,
  },
  names:{
    fontWeight:'bold',
  },
  moneys:{
    fontWeight:'100',
    color:'#BDBDBD'
  },
  more:{
    marginLeft:'60%'
  },
  home:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:15,
    width:'100%',
    paddingVertical:5
  },
  mode:{
    backgroundColor:'#000',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  header:{
    width:'100%'
  },
  data:{
    color:'#fff',
    borderWidth:1,
    padding:5,
    borderColor:'#fff'
  }

});
