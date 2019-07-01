import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    UIManager,
    LayoutAnimation
} from 'react-native';

import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate(){
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.configureNext(CustomLayoutSpring);
    }

    renderDescription = () => {
        // if (this.props.library.item.id === this.props.selectedLibraryId){
        if (this.props.expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {this.props.library.item.description}
                    </Text>
                </CardSection>
            );
        }
    }
    render(){
        const { titleStyle } = styles
        const { id, title } = this.props.library.item;

        console.log(this.props)
        return(
            <TouchableWithoutFeedback onPress={() => { this.props.selectLibrary(id), LayoutAnimation.linear() }}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );

    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}
const CustomLayoutSpring = {
    duration: 100,
    create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7,
    },
    update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.7,
    },
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id
    // return { selectedLibraryId: state.selectedLibraryId };
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);