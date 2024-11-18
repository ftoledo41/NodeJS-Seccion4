
import { buildLogger, logger as winstonLogger} from "./../../src/plugins/logger.plugin";

describe("plugins/logger.plugin", () => {
  test("", () => {
    const logger = buildLogger("test");

    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");
    const message = "Test message";

    const service = "test service";
    const logger = buildLogger(service);
    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith("info",expect.objectContaining({level:"info", message, service}));
  });
});
