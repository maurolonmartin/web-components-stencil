import { Component, Prop, h, State } from "@stencil/core";


@Component({
    tag: 'uc-tooltip',
    styleUrl: './tooltip.css',
    shadow: true
})
export class Tooltip {
    @State() tooltipVisible = false;

    @Prop() message = "We built this before, now it is better!";
 
    onToggleTooltip() {
        console.log('tooltio apretado')
        this.tooltipVisible = !this.tooltipVisible;
    }


    render() {
        let tooltip = null;
        if(this.tooltipVisible){
            tooltip = <div id="tooltip-text">{this.message}</div>
        }
        return [
            <slot />,
            <span id="tooltip-icon" onClick={this.onToggleTooltip.bind(this)}>?</span>,
            tooltip
        ]
    }
}