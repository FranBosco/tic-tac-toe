import { Square } from './Square';

export function Winner({ winner, resetGame }) {
	const winnerText = winner === false ? 'Empate' : 'Gano' + winner;
	if (winner === null) return null;
	return (
		<div>
			{winner !== null && (
				<section className="winner">
					<div className="text">
						<h2>{winnerText}</h2>
						<header className="win">
							{winner && <Square>{winner}</Square>}
						</header>
						<footer>
							<button onClick={resetGame}>Empezar de nuevo</button>
						</footer>
					</div>
				</section>
			)}
		</div>
	);
}
