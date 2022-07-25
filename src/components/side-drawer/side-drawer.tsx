import { Component, h, Method, Prop, State } from "@stencil/core";


@Component({
    tag: 'uc-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer{
    @Prop({ reflect: true }) titleMenu: string;
    @Prop({ reflect: true, mutable: true }) opened: boolean;
    @State() showContactInfo = false;

    onCloseDrawer() {
        this.opened = false;
    }

    onContentChange(content: string) {
        this.showContactInfo = content === 'contact';
    }

    @Method()
    open() {
        this.opened = true;
    }

    render() {
        let mainContent = <slot />;
        if(this.showContactInfo) {
            mainContent = (
                <div id="contact-information">
                    <h2>Contact information</h2>
                    <p>You can reach us via phone or mail.</p>
                    <ul>
                        <li>Phone: 6545615646</li>
                        <li>E-mail: <a href="mailto:something@something.com">something@something.com</a></li>
                    </ul>
                </div>
            );
        }
        
        return [
            <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}/>,
            <aside>
                <header>
                    <h1>{this.titleMenu}</h1>
                    <button onClick={this.onCloseDrawer.bind(this)}>X</button>
                </header>
                <section id="tabs">
                    <button
                        class={!this.showContactInfo ? 'active' : ''}
                        onClick={this.onContentChange.bind(this, 'nav')}
                    >
                        Navigation
                    </button>
                    <button
                        class={this.showContactInfo ? 'active' : ''}
                        onClick={this.onContentChange.bind(this, 'contact')}
                    >
                        Contact
                    </button>
                </section>
                <main>
                    {mainContent}
                </main>
            </aside>
        ];
    }
}