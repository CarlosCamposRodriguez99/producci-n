import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Link from 'next/link';

const MySwal = withReactContent(Swal);

const ContactForm = () => {

	const handleSubmit = async (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente

        try {
            const formData = new FormData(event.target);
            const response = await fetch("https://formsubmit.co/ajax/contacto@iciamex.com", {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                // Agregar un pequeño retraso antes de mostrar la alerta de éxito
                setTimeout(() => {
                    // Mostrar la alerta de éxito
                    MySwal.fire({
                        title: '¡Enviado!',
                        text: 'Su mensaje ha sido enviado, nos comunicaremos a la brevedad.',
                        icon: 'success',
                        timer: 2000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                    });
                }, 200); // Espera 200 milisegundos (0.2 segundos)
            } else {
                console.error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error al enviar el formulario', error);
        }
    };

    return (
        <div className="contact-area ptb-100">
            <div className="container">
                <div className="row d-flex align-items-stretch">
				<div className="d-flex">
                    <div className="col-lg-6" style={{ marginRight: '20px' }}>
						<div className="contact-wrap" style={{border: "1px solid #EBEDEF", borderRadius: "10px"}}>
							<div className="contact-form" style={{marginTop: "5px", marginLeft: "5px"}}>
								<div className="section-title">
									<h2 style={{fontFamily: "Montserrat, sans-serif", textAlign: "left", textTransform: "uppercase",fontSize: "24px"}}>Enviar mensaje</h2>

									<div style={{borderBottom: '2px solid #0880B6', marginBottom: "10px", width: "40%"}}></div>

									<p style={{textAlign: "justify", fontFamily: "Montserrat, sans-serif", color: "#000", fontWeight: 400 }}>Si está interesado en nuestros servicios y desea conocer más detalles, deje un mensaje aquí, le responderemos lo antes posible.</p>
								</div>

								<form action="https://formsubmit.co/contacto@iciamex.com" method="POST" onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<div className="form-group" style={{position: "relative", lineHeight: 1,}}>
											<i className="flaticon-support" style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)' }}></i>
												<input 
													type="text" 
													name="name" 
													placeholder="Nombre"
													className="form-control"
													required 
													style={{ borderRadius: "15px"}}
												/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group" style={{position: "relative", lineHeight: 1}}>
											<i className="bx bx-envelope" style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)' }}></i>
												<input 
													type="text"
													name="email" 
													placeholder="Email" 
													className="form-control"
													required
													style={{ borderRadius: "15px"}}
												/>
											</div>
										</div>
										
										
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<textarea 
													name="text" 
													cols="30" 
													rows="6" 
													placeholder="Escríbe tu mensaje..." 
													className="form-control"
													required
													style={{ borderRadius: "15px"}}
												/>
											</div>
										</div>
										<div className="col-lg-12 col-sm-12">
											<button type="submit" className="default-btn page-btn texto-boton" style={{ borderRadius: "25px", padding: "15px 30px"}}>
												Enviar
											</button>
										</div>
										
										<input type="hidden" name="_next" value="https://www.iciamex.com/"/>
										<input type="hidden" name="_captcha" value="false"/>
										<input type="hidden" name="_subject" value="¡Nuevo Mensaje! | ICIAMEX AUTOMATIZACIÓN INDUSTRIAL"/>
										<input type="hidden" name="_autoresponse" value="true" />

									</div>
								</form>
							</div>
                        </div>
                    </div>

					<div className="col-lg-6">
						<div className="quick-contact" style={{border: "1px solid #EBEDEF", borderRadius: "10px", height: "100%"}}>
							<h3 style={{fontFamily: "Montserrat, sans-serif", fontSize: "24px", textTransform: "uppercase", textAlign: "left",}}>Contacto</h3>

							<div style={{borderBottom: '2px solid #0880B6', marginBottom: "10px", width: "100%", }}></div>

							<ul>
								<li className="animated-list-item">
									<i className="bx bx-location-plus"></i>
									Ubicación:
									<span style={{fontWeight: 600}}>Lic. Ramiro Hernández 448, Las Pintitas, Jal. C.P. 45694</span>
								</li>
								<li className="animated-list-item">
									<i className="bx bx-phone-call"></i>
									Llámanos:
									<a href="tel:+52-33-16-02-23-58" style={{fontWeight: 600}}>+52-33-16-02-23-58</a>
								</li>
								<li className="animated-list-item">
									<i className="bx bx-envelope"></i>
									Email:
									<Link href="mailto:contacto@iciamex.com" passHref={true} legacyBehavior={true}>
									<span style={{cursor: "pointer", fontWeight: 600}}>contacto@iciamex.com</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>

					</div>
				
                </div>
            </div>
        </div>
    )
}

export default ContactForm;