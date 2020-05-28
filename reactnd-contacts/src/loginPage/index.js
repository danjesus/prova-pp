import React,{Component} from 'react';





export default class loginPage extends Component { 
    render (){

    return (
        <body>
            <div className ="login">
                <img src="/images/profile.png" className="usuario" width="100" height="100" alt="" />
                <h1>AD PHONEBOOK</h1>
                <form>

                    <p>Usuário</p>
                    <input type="text" name="" placeholder="Usuário ou Email" required />
                    <p>Senha</p>
                    <input type="password" name="" placeholder="Insira sua senha" required />
                    <input type="submit" name="" value="Entrar" onClick={() => this.history.push('/list')}/>
                    <a href="/List">Esqueceu sua senha?</a>

                </form>
            </div>
        </body>
    );
    }
}
