export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer__text">
                Copyright &copy; <span id="copyright-year">{year}</span>.
                Developed By{" "}
                <a
                    href="https://www.linkedin.com/in/ahmed-maher-algohary"
                    target="_blank"
                    rel="noreferrer"
                    title="About Developer"
                >
                    Ahmed Maher
                </a>
            </p>
            <span className="footer__rights">All Rights Reserved</span>
        </footer>
    );
}
