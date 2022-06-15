import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";


export default () => (
    <Container>
        <Header title="Lista zadań" />
        <Section
            title="Krzysztof Banasiak"
            body={<>Nazywam się Krzysztof Banasiak i mam 21 lat. Odkąd pamiętam lubiłem <strong>gry komputerowe</strong> i często zastanawiałem się, jak są zbudowane od strony programistycznej, stąd moje zainteresowanie kursem oraz programowaniem. Jestem dokładny i chętnie się uczę.</>}
        />
    </Container>
);