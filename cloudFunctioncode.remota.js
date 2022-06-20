/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.quitaVocales = (req, res) => {
    //let message = req.query.message || req.body.message || 'Hello World!';
    let message = req.query.cadena.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/g, '')
    //let message = req.query.cadena;
    res.set('Access-Control-Allow-Origin', '*');
    //res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', '*');
    //res.set('Access-Control-Allow-Methods', '*');
    //res.status(200).send(message);
    res.status(200).send({result:message, error:null});
};