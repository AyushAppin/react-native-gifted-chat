import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Images, Colors} from '../../../src/constants';
import FontStyle from '../../../src/styles/FontStyle';
import {
  Image,
  StyleSheet,
  View,
  ViewPropTypes,
  TouchableOpacity,
  Text,
  Linking,
} from 'react-native'
import CommonFunctions from '../../../src/utils/CommonFunctions'
// @ts-ignore
const styles = StyleSheet.create({
  container: {},
  image: {
    width: 50,
    height: 50,
    margin: 3,
    resizeMode: 'cover',
  },
  imageActive: {
    flex: 1,
    resizeMode: 'contain',
  },
})
export default class MessageDocument extends Component {
  render() {
    const {
      containerStyle,
      documentProps,
      documentStyle,
      currentMessage,
      position
    } = this.props
    console.log('MessageProps: ', this.props)
    const isRight = position === 'right' ;
    documentImage = value => {
      const fileName = value && value.name ? value.name : value
      const fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1)
      switch (fileExtension) {
        case 'doc':
          return Images.doc
          break
        case 'docx':
          return Images.doc
          break
        case 'pdf':
          return Images.pdf
          break
        case 'ppt':
          return Images.ppt
          break
        case 'pptx':
          return Images.ppt
          break
        case 'txt':
          return Images.txt
          break
        case 'xls':
          return Images.xls
          break
        case 'xlsx':
          return Images.xls
          break
        case 'rtf':
            return Images.rtf
            break
        default:
          return null
      }
    }
    if (!!currentMessage) {
// let isServerDocs = currentMessage.document && currentMessage.document.name ?  false : true 
      return (
        <View style={[styles.container, containerStyle]}>
          <TouchableOpacity
            onPress={() => Linking.openURL(currentMessage.document)}
          >
            <View
              style={{
                width: 200,
                margin: 5,
                alignItems: 'center',
              }}
            >
              <Image
                {...documentProps}
                style={[styles.image, documentStyle]}
                source={documentImage(currentMessage.document)}
              />
              <Text style={[FontStyle.monoropeBold_12, !isRight ? {color:Colors.darkBlueGrey, marginTop:5} : {color:Colors.white, marginTop:5}]} numberOfLines={2} >
                { currentMessage.document &&  currentMessage.document.name ? currentMessage.document.name : CommonFunctions.getFileNameFromUrl(currentMessage.document)}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
    return null
  }
}
MessageDocument.defaultProps = {
  currentMessage: {
    document: null,
  },
  containerStyle: {},
  documentStyle: {},
  documentProps: {},
  lightboxProps: {},
}
MessageDocument.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: ViewPropTypes.style,
  documentStyle: PropTypes.object,
  documentProps: PropTypes.object,
  lightboxProps: PropTypes.object,
}
//# sourceMappingURL=MessageDocument.js.map
