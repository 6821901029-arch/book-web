export default function register()  {
    return (
        <div className="auth-page">
        <form className="auth-card">
        <h1> สมัครสมาชิก </h1>
        <input placeholder="ชื่อ-นามสกุล"/>
        <input placeholder="Email"/>
        <input placeholder="Password"type="password"/>
        <button>  Register </button>



        </form>
        </div>
    );
}
