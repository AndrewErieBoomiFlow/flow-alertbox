(function (manywho) {

     function getStringAttribute(attributes, name) {
        if (attributes != null &&
            attributes[name] != null) {
            return attributes[name];
        }
        return null;
    }

    function getNumberAttribute(attributes, name) {
        if (getStringAttribute(attributes, name) != null) {
            return parseInt(getStringAttribute(attributes, name));
        }
        return 0;
    }

    var flowalertbox = React.createClass({

        componentDidMount: function () {            
            var model = manywho.model.getComponent(this.props.id, this.props.flowKey);
            var cont = document.getElementById(this.props.id+"_content");
            cont.innerHTML = model.content;
        },
               
        render: function () {
         
            var model = manywho.model.getComponent(this.props.id, this.props.flowKey);
            var state = manywho.state.getComponent(this.props.id, this.props.flowKey);

            if(getStringAttribute(model.attributes, 'alert_style') != null){
                var alert_style = " " + getStringAttribute(model.attributes, 'alert_style');
            } else {
                var alert_style = " alert-success";
            }

            return React.DOM.div(null, [
                React.createElement('div', { id: this.props.id , className: 'alert '+alert_style+' alert-dismissible' }, 
                    React.createElement('span', {className: "alert-content", id:this.props.id + "_content"}),                
                ),
            ]);
            
        }

    });
 
    manywho.component.register('flow_alertbox', flowalertbox, [ 'flowalertbox' ]);


}(manywho));