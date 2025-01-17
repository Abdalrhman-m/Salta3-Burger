const Book = ()=>{
    return(
        <section className="book_section layout_padding">
  <div className="container">
    <div className="heading_container">
      <h2>Book A Table</h2>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="form_container">
          <form action="">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div>
              <select
                className="form-control nice-select wide"
                style={{ display: "none" }}
              >
                <option value="" disabled="" selected="">
                  How many persons?
                </option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
              <div className="nice-select form-control wide" tabIndex={0}>
                <span className="current">How many persons?</span>
                <ul className="list">
                  <li data-value="" className="option selected disabled">
                    How many persons?
                  </li>
                  <li data-value="" className="option">
                    2
                  </li>
                  <li data-value="" className="option">
                    3
                  </li>
                  <li data-value="" className="option">
                    4
                  </li>
                  <li data-value="" className="option">
                    5
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <input type="date" className="form-control" />
            </div>
            <div className="btn_box">
              <button>Book Now</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-6">
        <div className="map_container ">
          <div
            id="googleMap"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "rgb(229, 227, 223)"
              }}
            >
              <div>
                <button
                  draggable="false"
                  aria-label="Keyboard shortcuts"
                  title="Keyboard shortcuts"
                  type="button"
                  style={{
                    background: "none transparent",
                    display: "block",
                    border: "none",
                    margin: 0,
                    padding: 0,
                    textTransform: "none",
                    appearance: "none",
                    position: "absolute",
                    cursor: "pointer",
                    userSelect: "none",
                    zIndex: 1000002,
                    outlineOffset: 3,
                    right: 0,
                    bottom: 0,
                    transform: "translateX(100%)"
                  }}
                />
              </div>
              <div
                tabIndex={0}
                aria-label="Map"
                aria-roledescription="map"
                role="region"
                aria-describedby="B281418F-2EA7-467C-AE5D-7209A53B1C11"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  padding: 0,
                  borderWidth: 0,
                  margin: 0,
                  left: 0,
                  top: 0
                }}
              >
                <div
                  id="B281418F-2EA7-467C-AE5D-7209A53B1C11"
                  style={{ display: "none" }}
                >
                  <div className="LGLeeN-keyboard-shortcuts-view">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <kbd aria-label="Left arrow">←</kbd>
                          </td>
                          <td aria-label="Move left.">Move left</td>
                        </tr>
                        <tr>
                          <td>
                            <kbd aria-label="Right arrow">→</kbd>
                          </td>
                          <td aria-label="Move right.">Move right</td>
                        </tr>
                        <tr>
                          <td>
                            <kbd aria-label="Up arrow">↑</kbd>
                          </td>
                          <td aria-label="Move up.">Move up</td>
                        </tr>
                        <tr>
                          <td>
                            <kbd aria-label="Down arrow">↓</kbd>
                          </td>
                          <td aria-label="Move down.">Move down</td>
                        </tr>
                        <tr>
                          <td>
                            <kbd>+</kbd>
                          </td>
                          <td aria-label="Zoom in.">Zoom in</td>
                        </tr>
                        <tr>
                          <td>
                            <kbd>-</kbd>
                          </td>
                          <td aria-label="Zoom out.">Zoom out</td>
                        </tr>
                        <tr>
                          <td>
                            <kbd>Home</kbd>
                          </td>
                          <td aria-label="Jump left by 75%.">
                            Jump left by 75%
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <kbd>End</kbd>
                          </td>
                          <td aria-label="Jump right by 75%.">
                            Jump right by 75%
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <kbd>Page Up</kbd>
                          </td>
                          <td aria-label="Jump up by 75%.">Jump up by 75%</td>
                        </tr>
                        <tr>
                          <td>
                            <kbd>Page Down</kbd>
                          </td>
                          <td aria-label="Jump down by 75%.">
                            Jump down by 75%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                className="gm-style"
                style={{
                  position: "absolute",
                  zIndex: 0,
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: "100%",
                  padding: 0,
                  borderWidth: 0,
                  margin: 0
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    zIndex: 0,
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: "100%",
                    padding: 0,
                    borderWidth: 0,
                    margin: 0,
                    cursor:
                      'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default',
                    touchAction: "pan-x pan-y"
                  }}
                >
                  <div
                    style={{
                      zIndex: 1,
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      width: "100%",
                      willChange: "transform",
                      transform: "translate(0px, 0px)"
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 100,
                        width: "100%"
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: 0
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            zIndex: 982,
                            transform: "matrix(1, 0, 0, 1, -127, -34)"
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: "-256px",
                              top: 0,
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: "-256px",
                              top: "-256px",
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: 0,
                              top: "-256px",
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: 256,
                              top: "-256px",
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: 256,
                              top: 0,
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 101,
                        width: "100%"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 102,
                        width: "100%"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 103,
                        width: "100%"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 0
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          zIndex: 982,
                          transform: "matrix(1, 0, 0, 1, -127, -34)"
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: "-256px",
                            top: 0,
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i77181!3i98561!4i256!2m3!1e0!2sm!3i705454821!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m2!1e3!5f2!23i47083502&key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&token=10530"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i77182!3i98561!4i256!2m3!1e0!2sm!3i705454821!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m2!1e3!5f2!23i47083502&key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&token=82193"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: "-256px",
                            top: "-256px",
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i77181!3i98560!4i256!2m3!1e0!2sm!3i705454821!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m2!1e3!5f2!23i47083502&key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&token=67806"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "-256px",
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i77182!3i98560!4i256!2m3!1e0!2sm!3i705454821!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m2!1e3!5f2!23i47083502&key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&token=8398"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 256,
                            top: 0,
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i77183!3i98561!4i256!2m3!1e0!2sm!3i705454821!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m2!1e3!5f2!23i47083502&key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&token=22785"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 256,
                            top: "-256px",
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i77183!3i98560!4i256!2m3!1e0!2sm!3i705454821!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m2!1e3!5f2!23i47083502&key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&token=80061"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      zIndex: 3,
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      padding: 0,
                      borderWidth: 0,
                      margin: 0,
                      left: 0,
                      top: 0,
                      touchAction: "pan-x pan-y"
                    }}
                  >
                    <div
                      style={{
                        zIndex: 4,
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        width: "100%",
                        willChange: "transform",
                        transform: "translate(0px, 0px)"
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: 104,
                          width: "100%"
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: 105,
                          width: "100%"
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: 106,
                          width: "100%"
                        }}
                      >
                        <span
                          id="2EC9345B-FBBC-49E1-9F1D-96627173CD8A"
                          style={{ display: "none" }}
                        >
                          To navigate, press the arrow keys.
                        </span>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: 107,
                          width: "100%"
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="gm-style-moc"
                    style={{
                      zIndex: 4,
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      padding: 0,
                      borderWidth: 0,
                      margin: 0,
                      left: 0,
                      top: 0,
                      opacity: 0,
                      transitionDuration: "0.8s"
                    }}
                  >
                    <p className="gm-style-mot">
                      Use ctrl + scroll to zoom the map
                    </p>
                  </div>
                </div>
                <iframe
                  aria-hidden="true"
                  frameBorder={0}
                  tabIndex={-1}
                  style={{
                    zIndex: -1,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    border: "none",
                    opacity: 0
                  }}
                />
                <div
                  style={{
                    pointerEvents: "none",
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    position: "absolute",
                    zIndex: 1000002,
                    opacity: 0,
                    border: "2px solid rgb(26, 115, 232)"
                  }}
                />
                <div />
                <div />
                <div />
                <div />
                <div>
                  <button
                    draggable="false"
                    aria-label="Toggle fullscreen view"
                    title="Toggle fullscreen view"
                    type="button"
                    aria-pressed="false"
                    className="gm-control-active gm-fullscreen-control"
                    style={{
                      background: "none rgb(255, 255, 255)",
                      border: 0,
                      margin: 10,
                      padding: 0,
                      textTransform: "none",
                      appearance: "none",
                      position: "absolute",
                      cursor: "pointer",
                      userSelect: "none",
                      borderRadius: 2,
                      height: 40,
                      width: 40,
                      boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                      overflow: "hidden",
                      top: 0,
                      right: 0
                    }}
                  >
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                      alt=""
                      style={{ height: 18, width: 18 }}
                    />
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                      alt=""
                      style={{ height: 18, width: 18 }}
                    />
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                      alt=""
                      style={{ height: 18, width: 18 }}
                    />
                  </button>
                </div>
                <div />
                <div />
                <div />
                <div />
                <div>
                  <div
                    className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom"
                    draggable="false"
                    data-control-width={40}
                    data-control-height={113}
                    style={{
                      margin: 10,
                      userSelect: "none",
                      position: "absolute",
                      bottom: 127,
                      right: 40
                    }}
                  >
                    <div
                      className="gmnoprint"
                      data-control-width={40}
                      data-control-height={40}
                      style={{ display: "none", position: "absolute" }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgb(255, 255, 255)",
                          boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                          borderRadius: 2,
                          width: 40,
                          height: 40
                        }}
                      >
                        <button
                          draggable="false"
                          aria-label="Rotate map clockwise"
                          title="Rotate map clockwise"
                          type="button"
                          className="gm-control-active"
                          style={{
                            background: "none",
                            display: "none",
                            border: 0,
                            margin: 0,
                            padding: 0,
                            textTransform: "none",
                            appearance: "none",
                            position: "relative",
                            cursor: "pointer",
                            userSelect: "none",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            width: 40,
                            height: 40
                          }}
                        >
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                            style={{ width: 20, height: 20 }}
                          />
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                            style={{ width: 20, height: 20 }}
                          />
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                            style={{ width: 20, height: 20 }}
                          />
                        </button>
                        <div
                          style={{
                            position: "relative",
                            overflow: "hidden",
                            width: 30,
                            height: 1,
                            margin: "0px 5px",
                            backgroundColor: "rgb(230, 230, 230)",
                            display: "none"
                          }}
                        />
                        <button
                          draggable="false"
                          aria-label="Rotate map counterclockwise"
                          title="Rotate map counterclockwise"
                          type="button"
                          className="gm-control-active"
                          style={{
                            background: "none",
                            display: "none",
                            border: 0,
                            margin: 0,
                            padding: 0,
                            textTransform: "none",
                            appearance: "none",
                            position: "relative",
                            cursor: "pointer",
                            userSelect: "none",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            width: 40,
                            height: 40,
                            transform: "scaleX(-1)"
                          }}
                        >
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                            style={{ width: 20, height: 20 }}
                          />
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                            style={{ width: 20, height: 20 }}
                          />
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                            style={{ width: 20, height: 20 }}
                          />
                        </button>
                        <div
                          style={{
                            position: "relative",
                            overflow: "hidden",
                            width: 30,
                            height: 1,
                            margin: "0px 5px",
                            backgroundColor: "rgb(230, 230, 230)",
                            display: "none"
                          }}
                        />
                        <button
                          draggable="false"
                          aria-label="Tilt map"
                          title="Tilt map"
                          type="button"
                          className="gm-tilt gm-control-active"
                          style={{
                            background: "none",
                            display: "block",
                            border: 0,
                            margin: 0,
                            padding: 0,
                            textTransform: "none",
                            appearance: "none",
                            position: "relative",
                            cursor: "pointer",
                            userSelect: "none",
                            top: 0,
                            left: 0,
                            overflow: "hidden",
                            width: 40,
                            height: 40
                          }}
                        >
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                            style={{ width: 18 }}
                          />
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                            style={{ width: 18 }}
                          />
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                            style={{ width: 18 }}
                          />
                        </button>
                      </div>
                    </div>
                    <button
                      draggable="false"
                      aria-label="Drag Pegman onto the map to open Street View"
                      title="Drag Pegman onto the map to open Street View"
                      type="button"
                      style={{
                        background: "none",
                        display: "block",
                        border: 0,
                        margin: 0,
                        padding: 0,
                        textTransform: "none",
                        appearance: "none",
                        position: "absolute",
                        cursor: "pointer",
                        userSelect: "none",
                        left: 20,
                        top: 0
                      }}
                    />
                    <div
                      className="gmnoprint"
                      data-control-width={40}
                      data-control-height={81}
                      style={{ position: "absolute", left: 0, top: 32 }}
                    >
                      <div
                        draggable="false"
                        style={{
                          userSelect: "none",
                          boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                          borderRadius: 2,
                          cursor: "pointer",
                          backgroundColor: "rgb(255, 255, 255)",
                          width: 40,
                          height: 81
                        }}
                      >
                        <button
                          draggable="false"
                          aria-label="Zoom in"
                          title="Zoom in"
                          type="button"
                          className="gm-control-active"
                          style={{
                            background: "none rgb(255, 255, 255)",
                            display: "block",
                            border: 0,
                            margin: 0,
                            padding: 0,
                            textTransform: "none",
                            appearance: "none",
                            position: "relative",
                            cursor: "pointer",
                            userSelect: "none",
                            overflow: "hidden",
                            width: 40,
                            height: 40,
                            top: 0,
                            left: 0
                          }}
                        >
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                            alt=""
                            style={{ height: 18, width: 18 }}
                          />
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                            alt=""
                            style={{ height: 18, width: 18 }}
                          />
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                            alt=""
                            style={{ height: 18, width: 18 }}
                          />
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23d1d1d1%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                            alt=""
                            style={{ height: 18, width: 18 }}
                          />
                        </button>
                        <div
                          style={{
                            position: "relative",
                            overflow: "hidden",
                            width: 30,
                            height: 1,
                            margin: "0px 5px",
                            backgroundColor: "rgb(230, 230, 230)",
                            top: 0
                          }}
                        />
                        <button
                          draggable="false"
                          aria-label="Zoom out"
                          title="Zoom out"
                          type="button"
                          className="gm-control-active"
                          style={{
                            background: "none rgb(255, 255, 255)",
                            display: "block",
                            border: 0,
                            margin: 0,
                            padding: 0,
                            textTransform: "none",
                            appearance: "none",
                            position: "relative",
                            cursor: "pointer",
                            userSelect: "none",
                            overflow: "hidden",
                            width: 40,
                            height: 40,
                            top: 0,
                            left: 0
                          }}
                        >
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                            alt=""
                            style={{ height: 18, width: 18 }}
                          />
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                            alt=""
                            style={{ height: 18, width: 18 }}
                          />
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                            alt=""
                            style={{ height: 18, width: 18 }}
                          />
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23d1d1d1%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                            alt=""
                            style={{ height: 18, width: 18 }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      margin: "0px 5px",
                      zIndex: 1000000,
                      position: "absolute",
                      left: 0,
                      bottom: 0
                    }}
                  >
                    <a
                      target="_blank"
                      rel="noopener"
                      title="Open this area in Google Maps (opens a new window)"
                      aria-label="Open this area in Google Maps (opens a new window)"
                      href="https://maps.google.com/maps?ll=40.712775,-74.005973&z=18&t=m&hl=en-US&gl=US&mapclient=apiv3"
                      style={{ display: "inline" }}
                    >
                      <div style={{ width: 66, height: 26 }}>
                        <img
                          alt="Google"
                          src="data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2069%2029%22%3E%3Cg%20opacity%3D%22.6%22%20fill%3D%22%23fff%22%20stroke%3D%22%23fff%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22M17.4706%207.33616L18.0118%206.79504%2017.4599%206.26493C16.0963%204.95519%2014.2582%203.94522%2011.7008%203.94522c-4.613699999999999%200-8.50262%203.7551699999999997-8.50262%208.395779999999998C3.19818%2016.9817%207.0871%2020.7368%2011.7008%2020.7368%2014.1712%2020.7368%2016.0773%2019.918%2017.574%2018.3689%2019.1435%2016.796%2019.5956%2014.6326%2019.5956%2012.957%2019.5956%2012.4338%2019.5516%2011.9316%2019.4661%2011.5041L19.3455%2010.9012H10.9508V14.4954H15.7809C15.6085%2015.092%2015.3488%2015.524%2015.0318%2015.8415%2014.403%2016.4629%2013.4495%2017.1509%2011.7008%2017.1509%209.04835%2017.1509%206.96482%2015.0197%206.96482%2012.341%206.96482%209.66239%209.04835%207.53119%2011.7008%207.53119%2013.137%207.53119%2014.176%208.09189%2014.9578%208.82348L15.4876%209.31922%2016.0006%208.80619%2017.4706%207.33616z%22/%3E%3Cpath%20d%3D%22M24.8656%2020.7286C27.9546%2020.7286%2030.4692%2018.3094%2030.4692%2015.0594%2030.4692%2011.7913%2027.953%209.39011%2024.8656%209.39011%2021.7783%209.39011%2019.2621%2011.7913%2019.2621%2015.0594c0%203.25%202.514499999999998%205.6692%205.6035%205.6692zM24.8656%2012.8282C25.8796%2012.8282%2026.8422%2013.6652%2026.8422%2015.0594%2026.8422%2016.4399%2025.8769%2017.2905%2024.8656%2017.2905%2023.8557%2017.2905%2022.8891%2016.4331%2022.8891%2015.0594%2022.8891%2013.672%2023.853%2012.8282%2024.8656%2012.8282z%22/%3E%3Cpath%20d%3D%22M35.7511%2017.2905v0H35.7469C34.737%2017.2905%2033.7703%2016.4331%2033.7703%2015.0594%2033.7703%2013.672%2034.7343%2012.8282%2035.7469%2012.8282%2036.7608%2012.8282%2037.7234%2013.6652%2037.7234%2015.0594%2037.7234%2016.4439%2036.7554%2017.2962%2035.7511%2017.2905zM35.7387%2020.7286C38.8277%2020.7286%2041.3422%2018.3094%2041.3422%2015.0594%2041.3422%2011.7913%2038.826%209.39011%2035.7387%209.39011%2032.6513%209.39011%2030.1351%2011.7913%2030.1351%2015.0594%2030.1351%2018.3102%2032.6587%2020.7286%2035.7387%2020.7286z%22/%3E%3Cpath%20d%3D%22M51.953%2010.4357V9.68573H48.3999V9.80826C47.8499%209.54648%2047.1977%209.38187%2046.4808%209.38187%2043.5971%209.38187%2041.0168%2011.8998%2041.0168%2015.0758%2041.0168%2017.2027%2042.1808%2019.0237%2043.8201%2019.9895L43.7543%2020.0168%2041.8737%2020.797%2041.1808%2021.0844%2041.4684%2021.7772C42.0912%2023.2776%2043.746%2025.1469%2046.5219%2025.1469%2047.9324%2025.1469%2049.3089%2024.7324%2050.3359%2023.7376%2051.3691%2022.7367%2051.953%2021.2411%2051.953%2019.2723v-8.8366zm-7.2194%209.9844L44.7334%2020.4196C45.2886%2020.6201%2045.878%2020.7286%2046.4808%2020.7286%2047.1616%2020.7286%2047.7866%2020.5819%2048.3218%2020.3395%2048.2342%2020.7286%2048.0801%2021.0105%2047.8966%2021.2077%2047.6154%2021.5099%2047.1764%2021.7088%2046.5219%2021.7088%2045.61%2021.7088%2045.0018%2021.0612%2044.7336%2020.4201zM46.6697%2012.8282C47.6419%2012.8282%2048.5477%2013.6765%2048.5477%2015.084%2048.5477%2016.4636%2047.6521%2017.2987%2046.6697%2017.2987%2045.6269%2017.2987%2044.6767%2016.4249%2044.6767%2015.084%2044.6767%2013.7086%2045.6362%2012.8282%2046.6697%2012.8282zM55.7387%205.22083v-.75H52.0788V20.4412H55.7387V5.220829999999999z%22/%3E%3Cpath%20d%3D%22M63.9128%2016.0614L63.2945%2015.6492%2062.8766%2016.2637C62.4204%2016.9346%2061.8664%2017.3069%2061.0741%2017.3069%2060.6435%2017.3069%2060.3146%2017.2088%2060.0544%2017.0447%2059.9844%2017.0006%2059.9161%2016.9496%2059.8498%2016.8911L65.5497%2014.5286%2066.2322%2014.2456%2065.9596%2013.5589%2065.7406%2013.0075C65.2878%2011.8%2063.8507%209.39832%2060.8278%209.39832%2057.8445%209.39832%2055.5034%2011.7619%2055.5034%2015.0676%2055.5034%2018.2151%2057.8256%2020.7369%2061.0659%2020.7369%2063.6702%2020.7369%2065.177%2019.1378%2065.7942%2018.2213L66.2152%2017.5963%2065.5882%2017.1783%2063.9128%2016.0614zM61.3461%2012.8511L59.4108%2013.6526C59.7903%2013.0783%2060.4215%2012.7954%2060.9017%2012.7954%2061.067%2012.7954%2061.2153%2012.8161%2061.3461%2012.8511z%22/%3E%3C/g%3E%3Cpath%20d%3D%22M11.7008%2019.9868C7.48776%2019.9868%203.94818%2016.554%203.94818%2012.341%203.94818%208.12803%207.48776%204.69522%2011.7008%204.69522%2014.0331%204.69522%2015.692%205.60681%2016.9403%206.80583L15.4703%208.27586C14.5751%207.43819%2013.3597%206.78119%2011.7008%206.78119%208.62108%206.78119%206.21482%209.26135%206.21482%2012.341%206.21482%2015.4207%208.62108%2017.9009%2011.7008%2017.9009%2013.6964%2017.9009%2014.8297%2017.0961%2015.5606%2016.3734%2016.1601%2015.7738%2016.5461%2014.9197%2016.6939%2013.7454h-4.9931V11.6512h7.0298C18.8045%2012.0207%2018.8456%2012.4724%2018.8456%2012.957%2018.8456%2014.5255%2018.4186%2016.4637%2017.0389%2017.8434%2015.692%2019.2395%2013.9838%2019.9868%2011.7008%2019.9868z%22%20fill%3D%22%234285F4%22/%3E%3Cpath%20d%3D%22M29.7192%2015.0594C29.7192%2017.8927%2027.5429%2019.9786%2024.8656%2019.9786%2022.1884%2019.9786%2020.0121%2017.8927%2020.0121%2015.0594%2020.0121%2012.2096%2022.1884%2010.1401%2024.8656%2010.1401%2027.5429%2010.1401%2029.7192%2012.2096%2029.7192%2015.0594zM27.5922%2015.0594C27.5922%2013.2855%2026.3274%2012.0782%2024.8656%2012.0782S22.1391%2013.2937%2022.1391%2015.0594C22.1391%2016.8086%2023.4038%2018.0405%2024.8656%2018.0405S27.5922%2016.8168%2027.5922%2015.0594z%22%20fill%3D%22%23E94235%22/%3E%3Cpath%20d%3D%22M40.5922%2015.0594C40.5922%2017.8927%2038.4159%2019.9786%2035.7387%2019.9786%2033.0696%2019.9786%2030.8851%2017.8927%2030.8851%2015.0594%2030.8851%2012.2096%2033.0614%2010.1401%2035.7387%2010.1401%2038.4159%2010.1401%2040.5922%2012.2096%2040.5922%2015.0594zM38.4734%2015.0594C38.4734%2013.2855%2037.2087%2012.0782%2035.7469%2012.0782%2034.2851%2012.0782%2033.0203%2013.2937%2033.0203%2015.0594%2033.0203%2016.8086%2034.2851%2018.0405%2035.7469%2018.0405%2037.2087%2018.0487%2038.4734%2016.8168%2038.4734%2015.0594z%22%20fill%3D%22%23FABB05%22/%3E%3Cpath%20d%3D%22M51.203%2010.4357v8.8366C51.203%2022.9105%2049.0595%2024.3969%2046.5219%2024.3969%2044.132%2024.3969%2042.7031%2022.7955%2042.161%2021.4897L44.0417%2020.7095C44.3784%2021.5143%2045.1997%2022.4588%2046.5219%2022.4588%2048.1479%2022.4588%2049.1499%2021.4487%2049.1499%2019.568V18.8617H49.0759C48.5914%2019.4612%2047.6552%2019.9786%2046.4808%2019.9786%2044.0171%2019.9786%2041.7668%2017.8352%2041.7668%2015.0758%2041.7668%2012.3%2044.0253%2010.1319%2046.4808%2010.1319%2047.6552%2010.1319%2048.5914%2010.6575%2049.0759%2011.2323H49.1499V10.4357H51.203zM49.2977%2015.084C49.2977%2013.3512%2048.1397%2012.0782%2046.6697%2012.0782%2045.175%2012.0782%2043.9267%2013.3429%2043.9267%2015.084%2043.9267%2016.8004%2045.175%2018.0487%2046.6697%2018.0487%2048.1397%2018.0487%2049.2977%2016.8004%2049.2977%2015.084z%22%20fill%3D%22%234285F4%22/%3E%3Cpath%20d%3D%22M54.9887%205.22083V19.6912H52.8288V5.220829999999999H54.9887z%22%20fill%3D%22%2334A853%22/%3E%3Cpath%20d%3D%22M63.4968%2016.6854L65.1722%2017.8023C64.6301%2018.6072%2063.3244%2019.9869%2061.0659%2019.9869%2058.2655%2019.9869%2056.2534%2017.827%2056.2534%2015.0676%2056.2534%2012.1439%2058.2901%2010.1483%2060.8278%2010.1483%2063.3818%2010.1483%2064.6301%2012.1768%2065.0408%2013.2773L65.2625%2013.8357%2058.6843%2016.5623C59.1853%2017.5478%2059.9737%2018.0569%2061.0741%2018.0569%2062.1746%2018.0569%2062.9384%2017.5067%2063.4968%2016.6854zM58.3312%2014.9115L62.7331%2013.0884C62.4867%2012.4724%2061.764%2012.0454%2060.9017%2012.0454%2059.8012%2012.0454%2058.2737%2013.0145%2058.3312%2014.9115z%22%20fill%3D%22%23E94235%22/%3E%3C/svg%3E"
                          draggable="false"
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 66,
                            height: 26,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0
                          }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div />
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      position: "absolute",
                      right: 0,
                      bottom: 0
                    }}
                  >
                    <div className="gmnoprint" style={{ zIndex: 1000001 }}>
                      <div
                        draggable="false"
                        className="gm-style-cc"
                        style={{
                          userSelect: "none",
                          position: "relative",
                          height: 14,
                          lineHeight: 14
                        }}
                      >
                        <div
                          style={{
                            opacity: "0.7",
                            width: "100%",
                            height: "100%",
                            position: "absolute"
                          }}
                        >
                          <div style={{ width: 1 }} />
                          <div
                            style={{
                              backgroundColor: "rgb(245, 245, 245)",
                              width: "auto",
                              height: "100%",
                              marginLeft: 1
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "relative",
                            paddingRight: 6,
                            paddingLeft: 6,
                            boxSizing: "border-box",
                            fontFamily: "Roboto, Arial, sans-serif",
                            fontSize: 10,
                            color: "rgb(0, 0, 0)",
                            whiteSpace: "nowrap",
                            direction: "ltr",
                            textAlign: "right",
                            verticalAlign: "middle",
                            display: "inline-block"
                          }}
                        >
                          <button
                            draggable="false"
                            aria-label="Keyboard shortcuts"
                            title="Keyboard shortcuts"
                            type="button"
                            style={{
                              background: "none",
                              display: "inline-block",
                              border: 0,
                              margin: 0,
                              padding: 0,
                              textTransform: "none",
                              appearance: "none",
                              position: "relative",
                              cursor: "pointer",
                              userSelect: "none",
                              color: "rgb(0, 0, 0)",
                              fontFamily: "inherit",
                              lineHeight: "inherit"
                            }}
                          >
                            <img
                              src="data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2016%2010%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1.5%200C.671573%200%200%20.671573%200%201.5v7C0%209.32843.671573%2010%201.5%2010h13C15.3284%2010%2016%209.32843%2016%208.5v-7C16%20.671573%2015.3284%200%2014.5%200h-13zM5%207C4.44772%207%204%207.44772%204%208%204%208.55229%204.44772%209%205%209h6C11.5523%209%2012%208.55229%2012%208%2012%207.44772%2011.5523%207%2011%207H5zM1%204.25c0-.13807.11193-.25.25-.25h1.5c.13807%200%20.25.11193.25.25v1.5c0%20.13807-.11193.25-.25.25H1.5C1.22386%206%201%205.77614%201%205.5V4.25zM1.5%201c-.27614%200-.5.22386-.5.5v1.25c0%20.13807.11193.25.25.25h1.5c.13807%200%20.25-.11193.25-.25v-1.5C3%201.11193%202.88807%201%202.75%201H1.5zM4%204.25c0-.13807.11193-.25.25-.25h1.5c.13807%200%20.25.11193.25.25v1.5c0%20.13807-.11193.25-.25.25h-1.5C4.11193%206%204%205.88807%204%205.75v-1.5zM4.25%201c-.13807%200-.25.11193-.25.25v1.5c0%20.13807.11193.25.25.25h1.5c.13807%200%20.25-.11193.25-.25v-1.5C6%201.11193%205.88807%201%205.75%201h-1.5zM7%204.25c0-.13807.11193-.25.25-.25h1.5C8.88807%204%209%204.11193%209%204.25v1.5C9%205.88807%208.88807%206%208.75%206h-1.5C7.11193%206%207%205.88807%207%205.75v-1.5zM7.25%201c-.13807%200-.25.11193-.25.25v1.5c0%20.13807.11193.25.25.25h1.5C8.88807%203%209%202.88807%209%202.75v-1.5C9%201.11193%208.88807%201%208.75%201h-1.5zM10%204.25C10%204.11193%2010.1119%204%2010.25%204h1.5C11.8881%204%2012%204.11193%2012%204.25v1.5C12%205.88807%2011.8881%206%2011.75%206h-1.5C10.1119%206%2010%205.88807%2010%205.75v-1.5zM10.25%201C10.1119%201%2010%201.11193%2010%201.25v1.5C10%202.88807%2010.1119%203%2010.25%203h1.5C11.8881%203%2012%202.88807%2012%202.75v-1.5C12%201.11193%2011.8881%201%2011.75%201h-1.5zM13%204.25C13%204.11193%2013.1119%204%2013.25%204h1.5C14.8881%204%2015%204.11193%2015%204.25V5.5C15%205.77614%2014.7761%206%2014.5%206h-1.25C13.1119%206%2013%205.88807%2013%205.75v-1.5zM13.25%201C13.1119%201%2013%201.11193%2013%201.25v1.5C13%202.88807%2013.1119%203%2013.25%203h1.5C14.8881%203%2015%202.88807%2015%202.75V1.5C15%201.22386%2014.7761%201%2014.5%201h-1.25z%22%20fill%3D%22%233C4043%22/%3E%3C/svg%3E"
                              alt=""
                              style={{ height: 9, verticalAlign: "-1px" }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="gmnoprint" style={{ zIndex: 1000001 }}>
                      <div
                        draggable="false"
                        className="gm-style-cc"
                        style={{
                          userSelect: "none",
                          position: "relative",
                          height: 14,
                          lineHeight: 14
                        }}
                      >
                        <div
                          style={{
                            opacity: "0.7",
                            width: "100%",
                            height: "100%",
                            position: "absolute"
                          }}
                        >
                          <div style={{ width: 1 }} />
                          <div
                            style={{
                              backgroundColor: "rgb(245, 245, 245)",
                              width: "auto",
                              height: "100%",
                              marginLeft: 1
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "relative",
                            paddingRight: 6,
                            paddingLeft: 6,
                            boxSizing: "border-box",
                            fontFamily: "Roboto, Arial, sans-serif",
                            fontSize: 10,
                            color: "rgb(0, 0, 0)",
                            whiteSpace: "nowrap",
                            direction: "ltr",
                            textAlign: "right",
                            verticalAlign: "middle",
                            display: "inline-block"
                          }}
                        >
                          <button
                            draggable="false"
                            aria-label="Map Data"
                            title="Map Data"
                            type="button"
                            style={{
                              background: "none",
                              border: 0,
                              margin: 0,
                              padding: 0,
                              textTransform: "none",
                              appearance: "none",
                              position: "relative",
                              cursor: "pointer",
                              userSelect: "none",
                              color: "rgb(0, 0, 0)",
                              fontFamily: "inherit",
                              lineHeight: "inherit"
                            }}
                          >
                            Map Data
                          </button>
                          <span style={{ display: "none" }}>
                            Map data ©2024 Google
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="gmnoscreen">
                      <div
                        style={{
                          fontFamily: "Roboto, Arial, sans-serif",
                          fontSize: 11,
                          color: "rgb(0, 0, 0)",
                          direction: "ltr",
                          textAlign: "right",
                          backgroundColor: "rgb(245, 245, 245)"
                        }}
                      >
                        Map data ©2024 Google
                      </div>
                    </div>
                    <button
                      draggable="false"
                      aria-label="Map Scale: 20 m per 44 pixels"
                      title="Map Scale: 20 m per 44 pixels"
                      type="button"
                      className="gm-style-cc"
                      aria-describedby="9C66498D-2E1A-42FA-A22B-C90D0661DD04"
                      style={{
                        background: "none",
                        display: "none",
                        border: 0,
                        margin: 0,
                        padding: 0,
                        textTransform: "none",
                        appearance: "none",
                        position: "relative",
                        cursor: "pointer",
                        userSelect: "none",
                        height: 14,
                        lineHeight: 14
                      }}
                    >
                      <div
                        style={{
                          opacity: "0.7",
                          width: "100%",
                          height: "100%",
                          position: "absolute"
                        }}
                      >
                        <div style={{ width: 1 }} />
                        <div
                          style={{
                            backgroundColor: "rgb(245, 245, 245)",
                            width: "auto",
                            height: "100%",
                            marginLeft: 1
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "relative",
                          paddingRight: 6,
                          paddingLeft: 6,
                          boxSizing: "border-box",
                          fontFamily: "Roboto, Arial, sans-serif",
                          fontSize: 10,
                          color: "rgb(0, 0, 0)",
                          whiteSpace: "nowrap",
                          direction: "ltr",
                          textAlign: "right",
                          verticalAlign: "middle",
                          display: "inline-block"
                        }}
                      >
                        <span style={{ color: "rgb(0, 0, 0)" }}>
                          20 m&nbsp;
                        </span>
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            height: 8,
                            bottom: "-1px",
                            width: 48
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: 4,
                              position: "absolute",
                              left: 0,
                              top: 0,
                              backgroundColor: "rgb(245, 245, 245)"
                            }}
                          />
                          <div
                            style={{
                              width: 4,
                              height: 8,
                              left: 0,
                              top: 0,
                              backgroundColor: "rgb(245, 245, 245)"
                            }}
                          />
                          <div
                            style={{
                              width: 4,
                              height: 8,
                              position: "absolute",
                              backgroundColor: "rgb(245, 245, 245)",
                              right: 0,
                              bottom: 0
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              backgroundColor: "rgb(0, 0, 0)",
                              height: 2,
                              left: 1,
                              bottom: 1,
                              right: 1
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              width: 2,
                              height: 6,
                              left: 1,
                              top: 1,
                              backgroundColor: "rgb(0, 0, 0)"
                            }}
                          />
                          <div
                            style={{
                              width: 2,
                              height: 6,
                              position: "absolute",
                              backgroundColor: "rgb(0, 0, 0)",
                              bottom: 1,
                              right: 1
                            }}
                          />
                        </div>
                      </div>
                      <span
                        id="9C66498D-2E1A-42FA-A22B-C90D0661DD04"
                        style={{ display: "none" }}
                      >
                        Click to toggle between metric and imperial units
                      </span>
                    </button>
                    <div
                      className="gmnoprint gm-style-cc"
                      draggable="false"
                      style={{
                        zIndex: 1000001,
                        userSelect: "none",
                        position: "relative",
                        height: 14,
                        lineHeight: 14
                      }}
                    >
                      <div
                        style={{
                          opacity: "0.7",
                          width: "100%",
                          height: "100%",
                          position: "absolute"
                        }}
                      >
                        <div style={{ width: 1 }} />
                        <div
                          style={{
                            backgroundColor: "rgb(245, 245, 245)",
                            width: "auto",
                            height: "100%",
                            marginLeft: 1
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "relative",
                          paddingRight: 6,
                          paddingLeft: 6,
                          boxSizing: "border-box",
                          fontFamily: "Roboto, Arial, sans-serif",
                          fontSize: 10,
                          color: "rgb(0, 0, 0)",
                          whiteSpace: "nowrap",
                          direction: "ltr",
                          textAlign: "right",
                          verticalAlign: "middle",
                          display: "inline-block"
                        }}
                      >
                        <a
                          href="https://www.google.com/intl/en-US_US/help/terms_maps.html"
                          target="_blank"
                          rel="noopener"
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "rgb(0, 0, 0)"
                          }}
                        >
                          Terms
                        </a>
                      </div>
                    </div>
                    <div
                      draggable="false"
                      className="gm-style-cc"
                      style={{
                        userSelect: "none",
                        position: "relative",
                        height: 14,
                        lineHeight: 14
                      }}
                    >
                      <div
                        style={{
                          opacity: "0.7",
                          width: "100%",
                          height: "100%",
                          position: "absolute"
                        }}
                      >
                        <div style={{ width: 1 }} />
                        <div
                          style={{
                            backgroundColor: "rgb(245, 245, 245)",
                            width: "auto",
                            height: "100%",
                            marginLeft: 1
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "relative",
                          paddingRight: 6,
                          paddingLeft: 6,
                          boxSizing: "border-box",
                          fontFamily: "Roboto, Arial, sans-serif",
                          fontSize: 10,
                          color: "rgb(0, 0, 0)",
                          whiteSpace: "nowrap",
                          direction: "ltr",
                          textAlign: "right",
                          verticalAlign: "middle",
                          display: "inline-block"
                        }}
                      >
                        <a
                          target="_blank"
                          rel="noopener"
                          title="Report errors in the road map or imagery to Google"
                          dir="ltr"
                          href="https://www.google.com/maps/@40.712775,-74.005973,18z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3"
                          style={{
                            fontFamily: "Roboto, Arial, sans-serif",
                            fontSize: 10,
                            textDecoration: "none",
                            position: "relative",
                            color: "rgb(0, 0, 0)"
                          }}
                        >
                          Report a map error
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "white",
                fontWeight: 500,
                fontFamily: "Roboto, sans-serif",
                padding: "15px 25px",
                boxSizing: "border-box",
                top: 5,
                border: "1px solid rgba(0, 0, 0, 0.12)",
                borderRadius: 5,
                left: "50%",
                maxWidth: 375,
                position: "absolute",
                transform: "translateX(-50%)",
                width: "calc(100% - 10px)",
                zIndex: 1
              }}
            >
              <div>
                <img
                  alt=""
                  src="https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg"
                  draggable="false"
                  style={{
                    padding: 0,
                    margin: 0,
                    border: 0,
                    height: 17,
                    verticalAlign: "middle",
                    width: 52,
                    userSelect: "none"
                  }}
                />
              </div>
              <div style={{ lineHeight: 20, margin: "15px 0px" }}>
                <span style={{ color: "rgba(0, 0, 0, 0.87)", fontSize: 14 }}>
                  This page can't load Google Maps correctly.
                </span>
              </div>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td style={{ lineHeight: 16, verticalAlign: "middle" }}>
                      <a
                        href="http://g.co/dev/maps-no-account"
                        target="_blank"
                        rel="noopener"
                        style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: 12 }}
                      >
                        Do you own this website?
                      </a>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <button className="dismissButton">OK</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        
    )

} 
export default Book 