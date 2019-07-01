import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    renderDescription = () => {
        // if (this.props.library.item.id === this.props.selectedLibraryId){
        if (this.props.expanded) {
            return (
                <Text>{this.props.library.item.description}</Text>
            );
        }
    }
    render(){
        const { titleStyle } = styles
        const { id, title } = this.props.library.item;

        console.log(this.props)
        return(
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
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

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id
    // return { selectedLibraryId: state.selectedLibraryId };
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);