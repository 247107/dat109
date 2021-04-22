<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="CSS/style.css" />

<title>Yatzy</title>
</head>
<body>
	<div class="container align">
		<div class="sub-container align">
			<div class="dice-info align">Trill terning for å starte</div>
			<div class="dices align">
				<div class="dice t1 align">1</div>
				<div class="dice t2 align">2</div>
				<div class="dice t3 align">3</div>
				<div class="dice t4 align">4</div>
				<div class="dice t5 align">5</div>
			</div>
			<div class="align">
				<div class="btn align">Trill terninger</div>
				<form action="yatzyServlet" method="POST">
					<input id="submit-value" type="hidden" name="dice-value" value="" />
					<input id="submit-id" type="hidden" name="dice-id" value="" />
					<button id="submit-btn" class="btn hidden" type="submit">
						Send inn</button>
				</form>
			</div>
		</div>
		<div class="sub-container align">
			<table>
				<tr>
					<th></th>
					<c:forEach var="spiller" items="${spillere}">
						<th>${spiller.navn}</th>
					</c:forEach>
				</tr>
				<tr>
					<td>Enere</td>
					<c:forEach var="spiller" items="${spillere}">

						<td id="${spiller.spillerID}ones"><c:if
								test="${spiller.poeng.enere >= 0}">${spiller.poeng.enere} </c:if></td>

					</c:forEach>

				</tr>
				<tr>
					<td>Toere</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}twos"><c:if
								test="${spiller.poeng.toere >= 0}">${spiller.poeng.toere}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>Treere</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}threes"><c:if
								test="${spiller.poeng.trere >= 0}">${spiller.poeng.trere}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>Firere</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}fours">
							<c:if test="${spiller.poeng.firere >= 0}">${spiller.poeng.firere}</c:if>
						</td>
					</c:forEach>
				</tr>
				<tr>
					<td>Femmere</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}fives"><c:if
								test="${spiller.poeng.femmere >= 0}">${spiller.poeng.femmere}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>Seksere</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}sixes"><c:if
								test="${spiller.poeng.seksere >= 0}">${spiller.poeng.seksere}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>Summ</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}sum"><c:if
								test="${spiller.poeng.sum >= 0}">${spiller.poeng.sum}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>Bonus</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}bonus"><c:if
								test="${spiller.poeng.bonus >= 0}">${spiller.poeng.bonus}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>Ett Par</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}one-pair"><c:if
								test="${spiller.poeng.etPar >= 0}">${spiller.poeng.etPar}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>To Par</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}two-pair"><c:if
								test="${spiller.poeng.toPar >= 0}">${spiller.poeng.toPar}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>Tre like</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}three-kind"><c:if
								test="${spiller.poeng.treLike >= 0}">${spiller.poeng.treLike}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>Fire Like</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}four-kind"><c:if
								test="${spiller.poeng.fireLike >= 0}">${spiller.poeng.fireLike}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>Fullt Hus</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}full-house"><c:if
								test="${spiller.poeng.hus >= 0}">${spiller.poeng.hus}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>Liten Straight</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}small-straight"><c:if
								test="${spiller.poeng.litenStraight >= 0}">${spiller.poeng.litenStraight}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>Stor Straight</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}large-straight"><c:if
								test="${spiller.poeng.storStraight >= 0}">${spiller.poeng.storStraight}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>Sjanse</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}chance"><c:if
								test="${spiller.poeng.sjanse >= 0}">${spiller.poeng.sjanse}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>YATZY</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}yatzy"><c:if
								test="${spiller.poeng.yatzy >= 0}">${spiller.poeng.yatzy}</c:if></td>
					</c:forEach>
				</tr>
				<tr>
					<td>TOTAL SCORE</td>
					<c:forEach var="spiller" items="${spillere}">
						<td id="${spiller.spillerID}total-score"><c:if
								test="${spiller.poeng.total >= 0}">${spiller.poeng.total}</c:if></td>
					</c:forEach>
				</tr>

			</table>
		</div>
	</div>
	<div class="hidden" id="runde-id">${rundeID}</div>
	<div class="hidden" id="spiller-id">${spillerID}</div>
	
	<script defer src="JS/app.js"></script>
<script  src="JS/utregning.js"></script>
</body>
</html>