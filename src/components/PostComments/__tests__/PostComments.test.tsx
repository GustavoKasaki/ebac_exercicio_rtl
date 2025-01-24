import { fireEvent, render, screen } from "@testing-library/react";
import Post from "..";

describe('Testes para os comentários', () => {
    test('Deve renderizar 02 comentários', () => {
        render(<Post />)

        const input = screen.getByTestId('input-comment')
        const botao = screen.getByTestId('botao-comment')

        // primeiro comentario
        fireEvent.change(input, {
            target: {
                value: 'Muito bom!'
            }
        })
        fireEvent.click(botao)
        expect(screen.getByText('Muito bom!')).toBeInTheDocument()

        // segundo comentario
        fireEvent.change(input, {
            target: {
                value: 'Top!'
            }
        })
        fireEvent.click(botao)
        expect(screen.getByText('Top!')).toBeInTheDocument()

        // verificação
        expect(screen.getAllByTestId('comment')).toHaveLength(2)
    })
})